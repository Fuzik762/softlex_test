import React from 'react'

const TasksItem = ({task, edit}) => {
  const setStatus = (status) => {
    let taskStatus = 'Выполняется';
    let stasusStyle = 'task__status_i'; 
    switch (status) {
      case 1:
        taskStatus = 'Выполняется (отр.)'
        break;
      case 10: 
        taskStatus = 'Выполнена'
        stasusStyle = 'task__status_c'
        break;
      case 11: 
        taskStatus = 'Выполнена (отр.)'
        stasusStyle = 'task__status_c'
        break;
      default:
        break;
    }
    return {taskStatus, stasusStyle}
  }

  return (
    <tr className='task' data-id={task.id}>
      <td>{task.username}</td>
      <td>{task.email}</td>
      <td className={setStatus(task.status).stasusStyle}>{setStatus(task.status).taskStatus}</td>
      <td className='task__description'>{task.text}</td>
      <td>{edit}</td>
    </tr>
  )
}

export default TasksItem