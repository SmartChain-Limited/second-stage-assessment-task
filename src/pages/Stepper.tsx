import React from 'react'
import { StepperProps } from '../type/Input'

const Stepper = ({step} : StepperProps) => {
  return (
    <div className="flex items-center justify-center  mb-5">
    <div className={`w-[23px] h-[23px] flex items-center justify-center rounded-full bg-[#3C6AAC] text-white font-semibold sm:content-[0] ${step >= 0 ? 'bg-[#3C6AAC]' : 'bg-[#DBDBDB]'}`}>
      1
    </div>
    <div className={`w-8 h-1 ${step >= 1 ? '!bg-[#3C6AAC]' : 'bg-[#DBDBDB]'} min-w-[100px] transition-all`}></div>
    <div className={`w-[23px] h-[23px] flex items-center justify-center rounded-full bg-[#3C6AAC] text-white font-semibold ${step >= 1 ? 'bg-[#3C6AAC]' : 'bg-gray-300'}`}>
      2
    </div>
    <div className={`w-8 h-1 ${step >= 2 ? 'bg-[#3C6AAC]' : 'bg-[#DBDBDB]'} min-w-[100px] ${step >= 3 ? 'w-8' : 'w-1'} transition-all`}></div>
    <div className={`w-[23px] h-[23px] flex items-center justify-center rounded-full bg-[#3C6AAC] text-white font-semibold ${step >= 2 ? 'bg-[#3C6AAC]' : 'bg-gray-300'}`}>
      3
    </div>
  </div>  )
}

export default Stepper