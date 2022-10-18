import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";

export default function MuiTextField(props: TextFieldProps) {
  return (
    <TextField
      InputLabelProps={{ sx: { color: "white" } }}
      sx={{
        color: "white",
        "& .MuiInputLabel-root": { color: "white" },
        "& .MuiInput-input": { borderBottomColor: "white", borderColor: "solid white", borderBottom: 1 },
      }}
      InputProps={{ disableUnderline: true, sx: { color: "white" } }}
      SelectProps={{ sx: { color: "white" } }}
      fullWidth
      margin="dense" 
      variant="standard"
      {...props}
    />
  );
}
