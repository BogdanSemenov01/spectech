import React, { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { MaskedInput } from "../MaskedInput/MaskedInput"

import s from "./LoginForm.module.scss"
import { Navigate, useNavigate } from "react-router-dom"
import { ModalContext } from "../../context/ModalContext"
import { RecoveryPassForm } from ".."

type Inputs = {
  login: string
  password: string
}

export const LoginForm = () => {
  const { openModal } = useContext(ModalContext)

  const error = 'Неверный логин или пароль.'
  const [isError, setIsError] = useState(false)

  const { register, handleSubmit, setValue, getValues } = useForm<Inputs>()
  const registerLogin = register("login")

  const [isAuth, setIsAuth] = useState(false)

  const setLog = (login: string) => {
    setValue('login', login)
  }

  const onSubmit = (data: Inputs) => {
    const correctLogin = "+71111111111"
    const correctPassword = "123456"
    const { login, password } = data

    if (
      login.replace(/\s/g, "") === correctLogin &&
      password === correctPassword
    ) {
      setIsAuth(true)
    } else {
      setIsError(true)
    }
  }

  if (isAuth) {
    return <Navigate to={"/auth"} />
  }
  const handleForgotPass = () => {
    setIsError(false)
    openModal({
      title: "Восстановить пароль",
      children: <RecoveryPassForm setLogin={setLog} log={getValues('login')}/>
    })
  }

  return (
    <div>
      <form
        className={s.wrapper}
        onSubmit={handleSubmit(onSubmit)}
        id="loginForm"
      >
      <div className={s.error} style={{display: `${isError ? 'block' : 'none'}`}}>{error}</div>
        <div className={s.inputBlock}>
          <label htmlFor="phoneNumber">Введите логин</label>
          <MaskedInput
            blurHandler={registerLogin.onBlur}
            changeHandler={registerLogin.onChange}
            name={registerLogin.name}
            inputRef={registerLogin.ref}
            required={true}
          />
        </div>
        <div className={s.inputBlock}>
          <label htmlFor="password">Введите пароль</label>
          <input type="password" {...register("password")} required/>
        </div>
      </form>
      <div className={s.actionButtons}>
        <button className={s.forgotButton} onClick={handleForgotPass}>
          Забыли пароль?
        </button>
        <button className={s.signInButton} type="submit" form="loginForm">
          Войти
        </button>
      </div>
    </div>
  )
}
