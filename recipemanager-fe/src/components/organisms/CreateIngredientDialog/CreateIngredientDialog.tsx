import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MuiTextField from "../../atoms/MuiTextField/MuiTextField";
import MuiButton from "../../atoms/MuiButton/MuiButton";
import { Formik } from "formik";
import Food from "../../../types/Food/Food";
import * as Yup from "yup";
import IngredientsSearchBar from "../../molecules/IngredientsSearchBar/IngredientsSearchBar";

interface PropsType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreateIngredientDialog({ open, setOpen }: PropsType) {
  const handleClose = () => {
    setOpen(false);
  };

  const [initialValue, setInitialValue] = useState({
    name: "",
    carbs: "",
    protein: "",
    fat: "",
    calories: "",
  });

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Can't be empty").max(255, "name is too long"),
    calories: Yup.number()
      .typeError("Value must be a number")
      .required("Can't be empty")
      .positive("Must be greater than zero"),
    carbs: Yup.number()
      .typeError("Value must be a number")
      .required("Can't be empty")
      .positive("Must be greater than zero"),
    fat: Yup.number()
      .typeError("Value must be a number")
      .required("Can't be empty")
      .positive("Must be greater than zero"),
    protein: Yup.number()
      .typeError("Value must be a number")
      .required("Can't be empty")
      .positive("Must be greater than zero"),
  });

  return (
    <Dialog open={open} onClose={handleClose}>
      <Formik
        enableReinitialize
        validationSchema={validationSchema}
        initialValues={initialValue}
        onSubmit={(values: Food) => {
          console.log(values);
        }}
      >
        {({ handleChange, submitForm, errors, values }) => (
          <div style={{ backgroundColor: "#37474F" }}>
            <DialogTitle sx={{ color: "white" }}>Create Ingredient</DialogTitle>
            <DialogContent>
              <IngredientsSearchBar
                onSelection={(value) => setInitialValue(value)}
              />
              <MuiTextField
                value={values.name}
                error={errors.name !== undefined}
                helperText={errors.name}
                autoFocus
                label="name"
                name="name"
                onChange={handleChange}
              />
              <MuiTextField
                value={values.calories}
                error={errors.calories !== undefined}
                helperText={errors.calories}
                label="calories"
                name="calories"
                onChange={handleChange}
              />
              <MuiTextField
                value={values.fat}
                error={errors.fat !== undefined}
                helperText={errors.fat}
                label="fat"
                name="fat"
                onChange={handleChange}
              />
              <MuiTextField
                value={values.carbs}
                error={errors.carbs !== undefined}
                helperText={errors.carbs}
                label="carbs"
                name="carbs"
                onChange={handleChange}
              />
              <MuiTextField
                value={values.protein}
                error={errors.protein !== undefined}
                helperText={errors.protein}
                label="protein"
                name="protein"
                onChange={handleChange}
              />
            </DialogContent>
            <DialogActions>
              <MuiButton onClick={handleClose}>Cancel</MuiButton>
              <MuiButton type="submit" onClick={submitForm}>
                Submit
              </MuiButton>
            </DialogActions>
          </div>
        )}
      </Formik>
    </Dialog>
  );
}
