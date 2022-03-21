import React, { useState } from 'react'
import MyButton from './UI/MyButton/myButton'

const Login = ({login}) => {
  const [userLogin, setUserLogin] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const loginForm = (e) => {
    e.preventDefault()
    let formLogin = new FormData()
    formLogin.append("username", userLogin)
    formLogin.append("password", userPassword)
    login(formLogin)
    setUserLogin('')
    setUserPassword('')
  }

  return (
    <form className='login_form'>
      <label htmlFor="login" >Логин</label>
      <input 
        type="text" 
        id="login" 
        required
        value={userLogin}
        onChange={e => setUserLogin(e.target.value)}
        />
      <label htmlFor="password">Пароль</label>
      <input 
        type="password" 
        id="password" 
        required
        value={userPassword}
        onChange={e => setUserPassword(e.target.value)}
        />
      <MyButton onClick={loginForm} type='submit'>
        Войти
      </MyButton>
    </form>
  ) 
}

export default Login