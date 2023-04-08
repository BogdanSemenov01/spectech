import React, { ReactNode } from "react"
import s from "./LoginBoard.module.scss"
import logo from "../../assets/logo.png"
import { LoginForm } from "../../components"

type LoginBoardProps = {
  children: ReactNode
}

export const LoginBoard: React.FC<LoginBoardProps> = ({children}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.logo}>
        <img src={logo} />
      </div>
      <div>{children}</div>
    </div>
  )
}
