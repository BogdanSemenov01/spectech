import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import s from './LogoutButton.module.scss'

export const LogoutButton: React.FC = () => { 
  const [isLogout, setIsLogout] = useState(false)
  if (isLogout) return <Navigate to={'/'}/>
  const handleClick = () => {
    setIsLogout(true)
  }
  return (
    <div className={s.wrapper}>
      <button onClick={handleClick}>Выйти</button>
    </div>
  )
}
