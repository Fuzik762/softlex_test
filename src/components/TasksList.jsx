import React from 'react'
import TasksItem from './TasksItem'

const TasksList = ({tasks, children, token}) => {
  return (
    <table className='tasks__list'>
      <thead className='tasks__header'>
        <tr>
          <th>Имя пользователя</th>
          <th>Email</th>
          <th>Статус</th>
          <th>Описание</th>
          {token
            ? <th>Редактировать</th>
            : null
          }
        </tr>
      </thead>
      <tbody className='tasks__body'>
        {tasks.map(task =>
          <TasksItem task={task} key={task.id} edit={children}/>
        )}
      </tbody>
    </table>
  )
}

export default TasksList