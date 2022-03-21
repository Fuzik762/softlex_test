import axios from "axios";

export default class TasksApi {
  static async getTasks(page,field = 'id', direction = 'asc') {
    try {
      const response = await axios.get('https://uxcandy.com/~shapoval/test-task-backend/v2/', {
        params: {
          developer: 'SergeySobolev',
          page,
          sort_field: field,
          sort_direction: direction
        }
      })
      return response.data.message
    } catch (error) {
      console.log(error)
    }
  }

  static async createTask(task) {
    try {
      await axios({
        method: 'POST',
        url: 'https://uxcandy.com/~shapoval/test-task-backend/v2/create',
        params: {
          developer: 'SergeySobolev',
        },
        data: task,
      })
    } catch (error) {
      
    }
  }


  static async editTask(task,id) {
    try {
      await axios({
        method: 'POST',
        url: 'https://uxcandy.com/~shapoval/test-task-backend/v2/edit/' + id,
        params: {
          developer: 'SergeySobolev',
        },
        data: task
      })
    } catch (error) {
      
    }
  }
}