import { TextFieldProps } from '@mui/material'
import React from 'react'
import MuiTextField from '../../atoms/MuiTextField/MuiTextField'

interface PropsType {
    handleChange: (value: string) => void;
}

export default function UploadFileInput({handleChange, onChange, ...props}: TextFieldProps & PropsType) {
    const convertBase64 = (file: Blob): Promise<string> => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            const result = fileReader.result
            resolve(result === null || result instanceof ArrayBuffer ? "" : result);
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })
      }
    

    const extendedHandleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const files = (event.target as HTMLInputElement).files
        if (files !== null) {
            convertBase64(files[0]).then((base64: string) => handleChange(base64))
        } else {
            handleChange("");
        }
    }
  return (
    <MuiTextField type="file"  {...props} onChange={extendedHandleChange} />
  )
}
