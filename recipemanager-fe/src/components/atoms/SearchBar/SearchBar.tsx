import React, { useState } from "react";
import MuiTextField from "../MuiTextField/MuiTextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

interface PropsType {
  onChange?: (value: string) => void;
}

export default function SearchBar({ onChange }: PropsType) {
  const [value, setValue] = useState("");
  const handleChange = (
    currentValue: string
  ) => {
    setValue(currentValue);
    onChange && onChange(currentValue);
  };
  return (
    <MuiTextField
      value={value}
      onChange={(event) => handleChange(event.currentTarget.value)}
      placeholder="Search"
      InputProps={{
        disableUnderline: true,
        sx: { color: "white" },
        endAdornment: (
          <InputAdornment position="end">
            {value.length > 0 ? (
              <IconButton onClick={() => handleChange("")}>
                <ClearIcon sx={{ color: "white" }} />
              </IconButton>
            ) : (
              <IconButton>
                <SearchIcon sx={{ color: "white" }} />
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
    />
  );
}
