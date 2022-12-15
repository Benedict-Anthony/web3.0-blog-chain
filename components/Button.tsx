import React from 'react'
import ButtonbStyles from "@/styles/Button.module.scss"
type ButtonProps = {
    title:string
}
const Button = ({title}: ButtonProps) => {
  return (
    <button className={ButtonbStyles.button}>
      {title}
    </button>
  )
}

export default Button
