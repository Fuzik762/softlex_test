import React from 'react'

const navbar = ({show, token}) => {
  return (
    <nav className='navbar'>
      <h4>Тестовое задание для Softlex</h4>
      <ul className='navbar__links'>
        {token 
          ? <span>Вы вошли как Администратор</span>
          : (<li className='navbar__link'>
              <a href="#" onClick={show}>Войти</a>
            </li>)
        }
      </ul>
    </nav>
  )
}

export default navbar