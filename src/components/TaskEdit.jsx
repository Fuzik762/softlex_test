import React, {useEffect, useState} from 'react'
import MyButton from './UI/MyButton/myButton'

const TaskEdit = ({task, editedTask}) => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    text: '',
  })

  useEffect(() => {
    setForm({
      username: task.username,
      email: task.email,
      text: task.text,
    })
  }, [task])

  function editTask(e) {
    e.preventDefault()
    const checkbox = e.target.querySelector('#task_edit_status').checked
    editedTask(form, checkbox)
  }

  return (
    <form onSubmit={editTask} className='create_form'>
      <h3 className='create_header'>Редактирование задачи</h3>
      <label htmlFor="user_name_edit">Имя пользователя</label>
      <input 
        type="text" 
        id="user_name_edit" 
        required
        value={task.username}
        disabled
      />
      <label htmlFor="user_email_edit">Email</label>
      <input 
        type="text" 
        id="user_email_edit" 
        required
        value={task.email}
        disabled
      />
      <label htmlFor="task_edit_decription">Описание задачи</label>
      <textarea 
        id="task_edit_decription" 
        cols="30" 
        rows="10" 
        required
        value={form.text}
        onChange={e => setForm({...form, text: e.target.value})}
      />
      <div className='check_complete'>
        <input 
          type="checkbox" 
          id="task_edit_status"
          />
        <label htmlFor="task_edit_status">Задача выполнена</label>
      </div>
      <MyButton type='submit'>
        Редактировать задачу
      </MyButton>
    </form>
  )
}

export default TaskEdit;