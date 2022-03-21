import React, {useEffect, useState, useMemo} from 'react';
import TasksList from './components/TasksList'
import Navbar from './components/Navbar'
import MyModal from './components/UI/MyModal/myModal';
import MyButton from './components/UI/MyButton/myButton';
import TasksCreate from './components/TasksCreate';
import Filter from './components/Filter';
import Login from './components/Login';
import TasksApi from './API/tasks';
import LoginApi from './API/login';
import alertErorr from './API/error'
import TaskEdit from './components/TaskEdit';
import Pagination from './components/UI/Pagination/Pagination';

function App() {
  const [tasks, setTasks] = useState([])
  const [modalCreate, setModalCreate] = useState(false)
  const [modalLogin, setModalLogin] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)
  const [page, setPage] = useState(3)
  const [totalPage, setTotalPage] = useState(0)
  const [selectSort, setSelectSort] = useState('')
  const [selectSortDir, setSelectSortDir] = useState('asc')
  const [adminToken, setAdminToken] = useState('')
  const [taskEdit, setTaskEdit] = useState({})
  

  async function fetchTasks() {
    const response = await TasksApi.getTasks(page, selectSort, selectSortDir)
    if(!alertErorr(response)) {
      setTotalPage(Math.ceil(response.total_task_count / 3))
      setTasks(response.tasks)
    } 
    
  }

  async function loginAdmin(form) {
    const response = await LoginApi.Login(form)
    if(!alertErorr(response)) {
      setAdminToken(response.message.token)
      setModalLogin(false)
    } 
  }

  useMemo(() => {
    fetchTasks()
  },[selectSort,selectSortDir, page])

  useEffect(() => {
    fetchTasks()
  }, [])
  
  async function createTask(form) {
    let newTask = new FormData()
    newTask.append("username", form.username)
    newTask.append("email", form.email)
    newTask.append("text", form.text)
    await TasksApi.createTask(newTask)
    setModalCreate(false)
    fetchTasks()
  }

  const changePage = (page) => {
    setPage(page)
  }

  const sortTasks = (sort) => {
    setSelectSort(sort)
  }

  const sortDir = (dir) => {
    setSelectSortDir(dir)
  }

  const showModalLogin = (e) => {
    e.preventDefault();
    setModalLogin(true)
  }

  const editTasks = (id) => {
    setTaskEdit(tasks.find(t => t.id === Number(id)))
    setModalEdit(true)
  }

  const editedTask = async (form, check) => {
    let task = new FormData()
    task.append("username", form.username)
    task.append("token", adminToken)
    task.append("email", form.email)
    task.append("text", form.text)
    let status = 0
    if(form.text === taskEdit.text)
    { 
      if(check) {
        status = 10
      }
    } else {
      if(check) {
        status = 11
      } else {
        status = 1
      }
    }
    task.append("status", status)
    await TasksApi.editTask(task, taskEdit.id, adminToken)
    setModalEdit(false)
    fetchTasks()
  }

  return (
    <div className="App">
      <Navbar show={showModalLogin} token={adminToken} />
      <div className='tasks_container'>
        <h1 className='header'>Список задач</h1>
        <Filter
          value={selectSort}
          onChange={sortTasks}
          changeDir={sortDir}
          defaultValue='Сортировка'
          options={[
            {value: 'username', name: 'По имени пользователя'},
            {value: 'email', name: 'По email'},
            {value: 'status', name: 'По статусу'},
          ]}
        > 
          <MyButton onClick={() => setModalCreate(true)}> 
            Создать задачу 
          </MyButton>
        </Filter >
        {tasks.length
        ? (<TasksList tasks={tasks} token={adminToken}>
            {adminToken
              ? <MyButton onClick={(e) => editTasks(e.target.closest('tr').dataset.id)}>Редактировать</MyButton>
              : ''
            } 
          </TasksList>)
        : <h1>Задачи не найдены!</h1>
        }
        <MyModal visible={modalCreate} setVisible={setModalCreate}>
          <TasksCreate create={createTask} />
        </MyModal>
        <MyModal visible={modalEdit} setVisible={setModalEdit}>
          <TaskEdit task={taskEdit} editedTask={editedTask}/>
        </MyModal>
        <MyModal visible={modalLogin} setVisible={setModalLogin}>
          <Login login={loginAdmin}/>
        </MyModal>
        <Pagination page={page} totalPage={totalPage} changePage={changePage}/>
      </div>
    </div>
  );
}

export default App;
