import React, {useState} from 'react'
import MyButton from './UI/MyButton/myButton'

const TasksCreate = ({create}) => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    text: '',
  })

  function createTask(e) {
    e.preventDefault()
    if(validateEmail(form.email)) {
      create(form)
      setForm({
        username: '',
        email: '',
        text: '',
      })
    }
  }

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!re.test(String(email).toLowerCase())) {
      alert('Некорретный email')
      return false
    } 
    return true
  }

  return (
    <form onSubmit={createTask} className='create_form'>
      <h3 className='create_header'>Создание задачи</h3>
      <label htmlFor="user_name">Имя пользователя</label>
      <input 
        type="text" 
        id="user_name" 
        required
        value={form.username}
        onChange={e => setForm({...form, username: e.target.value})}
      />
      <label htmlFor="user_email" >Email</label>
      <input 
        type="text" 
        id="user_email" 
        required
        value={form.email}
        onChange={e => setForm({...form, email: e.target.value})}
      />
      <label htmlFor="task_create_decription">Описание задачи</label>
      <textarea 
        id="task_create_decription" 
        cols="30" 
        rows="10" 
        required
        value={form.text}
        onChange={e => setForm({...form, text: e.target.value})}
      />
      <MyButton type='submit'>
        Добавить задачу
      </MyButton>
    </form>
  )
}

export default TasksCreate;