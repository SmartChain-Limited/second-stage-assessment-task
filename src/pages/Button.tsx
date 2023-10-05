import React from 'react'
import { ButtonProps } from '../type/Button'

const Button = ({children, type, disabled, onclick}: ButtonProps) => {
  return (
    <button type={type} onClick={onclick} disabled={disabled} className='bg-[#3C6AAC] px-[100px] py-[20px] rounded-[5px] flex flex-row gap-[10px] text-[16px] text-white '>
        {children}
    </button>
  )
}

export default Button