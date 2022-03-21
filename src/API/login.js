import axios from "axios";

export default class LoginApi {
  static async Login(form) {
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://uxcandy.com/~shapoval/test-task-backend/v2/login',
        params: {
          developer: 'SergeySobolev',
        },
        data: form,
      })
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  static async createTask(task) {
    try {
      await axios({
        method: 'POST',
        url: 'https://uxcandy.com/~shapoval/test-task-backend/v2/create',
        data: task,
      })
    } catch (error) {
      
    }
  }

  
}