import { TextareaAutosize, TextareaAutosizeProps } from "@mui/material";
import React from "react";

export default function MuiTextareaAutosize(props: TextareaAutosizeProps) {
  return (
    <TextareaAutosize
      maxRows={4}
      {...props}
    />
  );
}
