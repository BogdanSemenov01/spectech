import React, { ReactNode } from "react"
import s from "./MainContainer.module.scss"
import background from "../../assets/fon1920.png"

type MainContainerProps = {
  children: ReactNode
}

export const MainContainer: React.FC<MainContainerProps> = ({children}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.mainContainer}>
        {children}
        </div>
    </div>
  )
}
