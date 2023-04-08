import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { MaskedInput } from "../MaskedInput/MaskedInput"
import s from './RecoveryPassForm.module.scss'

type Input = {
  login: string
}

type RecoveryPassFormProps = {
  setLogin: any
  log: string
}

// Сложная функция для создания пароля
const fn = () => '123456'

export const RecoveryPassForm: React.FC<RecoveryPassFormProps> = ({setLogin, log}) => {
  const { register, handleSubmit } = useForm<Input>({
    defaultValues: {
      login: log
    }
  })

  const registerLogin = register('login')
  const [newPass, setNewPass] = useState('')
  const onSubmit = (data: Input) => {
    setLogin(data.login)
    let newPassword = fn()
    setNewPass(newPassword)
  }

  const handleClick = () => {
    
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={s.wrapper} id='newPassForm'>
        <div className={s.inputBlock}>
          <label>Введите ваш логин</label>
          <MaskedInput
            blurHandler={registerLogin.onBlur}
            changeHandler={registerLogin.onChange}
            name={registerLogin.name}
            inputRef={registerLogin.ref}
            required={true}
          />
        </div>
        <button onClick={handleClick} form='newPassForm'>Создать временный пароль</button>
        <div className={s.newPassBlock}>{newPass}</div>
      </form>
    </>
  )
}
