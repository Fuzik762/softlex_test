import React from 'react'
import classes from './myModal.module.css'

const myModal = ({children, visible, setVisible}) => {
  
  const mainClass = [classes.container_modal]
  if(visible) {
    mainClass.push(classes.active)
  }
  
  return (
    <div className={mainClass.join(' ')} onClick={() => setVisible(false)}>
      <div className={classes.inner_modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default myModal