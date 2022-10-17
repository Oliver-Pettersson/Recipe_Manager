import React from 'react'
import Button, { ButtonProps } from '@mui/material/Button'

export default function MuiButton({children, ...props}: ButtonProps) {
  return (
    <Button {...props} sx={{color: "#63A4FF"}}>{children}</Button>
  )
}
