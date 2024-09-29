import React from 'react'

interface ButtonProps {
  text:string,
  type:"submit" | "button" | "reset",
  style?:string,
  handleClick?:()=>void
}

const Button:React.FC<ButtonProps> = ({text,type,style,handleClick}) => {
  return (
    <button type={type} className={`w-full bg-dark-200 text-white dark:bg-white px-4 py-3 dark:text-gray-950  transition-colors duration-75 ${style}`} onClick={handleClick}>
       {text}
    </button>
  )
}

export default Button