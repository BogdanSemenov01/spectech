import React, { Dispatch, SetStateAction } from "react"
import InputMask from "react-input-mask"

type MaskedInputProps = {
  changeHandler: any
  name: string
  blurHandler: any
  inputRef: any
  required?: any
}

export const MaskedInput: React.FC<MaskedInputProps> = ({
  changeHandler,
  name,
  blurHandler,
  inputRef,
  required=false
}) => {

  return (
    <div>
      <InputMask 
        mask="+7 999 999 99 99"
        placeholder="+7 999 999 99 99"
        onChange={changeHandler}
        onBlur={blurHandler}
        ref={inputRef}
        name={name}
        required={required}
      />
        
    </div>
  )
}
