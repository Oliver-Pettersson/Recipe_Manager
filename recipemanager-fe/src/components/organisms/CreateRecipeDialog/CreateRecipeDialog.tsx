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
import * as Yup from "yup";
import { Typography } from "@mui/material";
interface PropsType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreateRecipeDialog({ open, setOpen }: PropsType) {
  const handleClose = () => {
    setOpen(false);
  };

  const validationSchema = Yup.object().shape({
    image: Yup.string().required("Can't be empty"),
    name: Yup.string().required("Can't be empty").max(255, "name is too long"),
    description: Yup.string().required("Can't be empty"),
    ingredients: Yup.array().of(
      Yup.object({
        id: Yup.string().required("Can't be empty"),
        amount: Yup.number().required("Can't be empty").min(1, "Can't be less than 1"),
      })
    ),
  });

  return (
    <Dialog open={open} onClose={handleClose}>
      <div style={{ backgroundColor: "#37474F" }}>
        <DialogTitle sx={{ color: "white" }}>Create Recipe</DialogTitle>
        <Formik
          validationSchema={validationSchema}validateOnMount={false}
          validateOnChange={false}
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
          {({ handleSubmit, handleChange, setFieldValue, errors }) => (
            <>
              <DialogContent>
                <>
                <UploadFileInput
                  variant="standard"
                  name="coverImage"
                  label="Cover Picture"
                  error={errors.image !== undefined}
                  helperText={errors.image}
                  handleChange={(value: string) => {
                    setFieldValue("image", value);
                  }}
                />
                <MuiTextField
                  onChange={handleChange}
                  id="name"
                  label="name"
                  name="name"
                  error={errors.name !== undefined}
                  helperText={errors.name}
                />
                <MuiTextareaAutosize
                  placeholder="Recipe description"
                  minRows={3}
                  maxRows={5}
                  name="description"
                  onChange={handleChange}
                />
                {errors.description && (
                  <Typography color="red" variant="caption">
                    {errors.description}
                  </Typography>
                )}
                <IngredientInputList
                  setFormikFieldValue={(value) =>
                    setFieldValue("ingredients", value)
                  }
                />
                {errors.ingredients !== undefined && (
                  <Typography color="red" variant="caption">
                    {errors.ingredients && "Please validate the input list"}
                  </Typography>
                )}
                </>
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
