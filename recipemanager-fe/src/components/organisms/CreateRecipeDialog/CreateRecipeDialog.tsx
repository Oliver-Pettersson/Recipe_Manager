import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MuiTextField from "../../atoms/MuiTextField/MuiTextField";
import MuiButton from "../../atoms/MuiButton/MuiButton";
import UploadFileInput from "../../molecules/UploadFileInput/UploadFileInput";
import { Formik } from "formik";
import Recipe from "../../../types/Recipe/Recipe";
import IngredientInputList from "../../molecules/IngredientInputList/IngredientInputList";
import MuiTextareaAutosize from "../../atoms/MuiTextareaAutosize/MuiTextareaAutosize";

interface PropsType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreateRecipeDialog({ open, setOpen }: PropsType) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <div style={{ backgroundColor: "#37474F" }}>
        <DialogTitle sx={{ color: "white" }}>Create Recipe</DialogTitle>
        <Formik
          initialValues={{
            image: "",
            name: "",
            ingredients: [],
            description: "",
          }}
          onSubmit={(value: Recipe) => {
            console.log(value);
          }}
        >
          {({ handleSubmit, handleChange, setFieldValue }) => (
            <>
              <DialogContent>
                <UploadFileInput
                  variant="standard"
                  name="coverImage"
                  label="Cover Picture"
                  handleChange={(value: string) => {
                    setFieldValue("image", value);
                  }}
                />
                <MuiTextField
                  onChange={handleChange}
                  id="name"
                  label="name"
                  name="name"
                />
                <MuiTextareaAutosize
                  placeholder="Recipe description"
                  minRows={3}
                  maxRows={5}
                  name="description"
                  onChange={handleChange}
                />
                <IngredientInputList
                  setFormikFieldValue={(value) =>
                    setFieldValue("ingredients", value)
                  }
                />
              </DialogContent>
              <DialogActions>
                <MuiButton onClick={handleClose}>Cancel</MuiButton>
                <MuiButton onClick={() => handleSubmit()}>Submit</MuiButton>
              </DialogActions>
            </>
          )}
        </Formik>
      </div>
    </Dialog>
  );
}
