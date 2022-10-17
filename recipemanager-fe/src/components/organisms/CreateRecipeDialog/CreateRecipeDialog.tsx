import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MuiTextField from "../../atoms/MuiTextField/MuiTextField";
import MuiButton from "../../atoms/MuiButton/MuiButton";

interface PropsType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreateIngredientDialog({ open, setOpen }: PropsType) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <div style={{ backgroundColor: "#37474F" }}>
        <DialogTitle sx={{ color: "white" }}>Create Ingredient</DialogTitle>
        <DialogContent>
          <MuiTextField autoFocus id="name" label="name" />
        </DialogContent>
        <DialogActions>
          <MuiButton onClick={handleClose}>Cancel</MuiButton>
          <MuiButton onClick={handleClose}>Submit</MuiButton>
        </DialogActions>
      </div>
    </Dialog>
  );
}
