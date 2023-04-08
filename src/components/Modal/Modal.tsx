import React, { useContext, useEffect, useState } from "react"
import { ModalContext } from "../../context/ModalContext"
import s from './Modal.module.scss'

type ModalProps = {
  title: string
  children: React.ReactElement | undefined
  
}

export const Modal = (props: ModalProps) => {
  const { title, children } = props

  const { closeModal } = useContext(ModalContext)


  const onClickClose = () => {
    closeModal()
  }

  return (
    <div onClick={onClickClose} className={s.ModalBackDrop}>
      <div
        onClick={(e) => e.stopPropagation()}
        data-testid='modal'
        className={s.Modal}
      >
        <div className={s.ModalHeader}>
          <h3>{title}</h3>
          <button onClick={onClickClose}>x</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

