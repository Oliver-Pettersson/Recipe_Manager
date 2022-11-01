import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MuiTextField from "../../atoms/MuiTextField/MuiTextField";
import MuiButton from "../../atoms/MuiButton/MuiButton";
import UploadFileInput from "../../molecules/UploadFileInput/UploadFileInput";
import { Formik } from "formik";
import CreateRecipeDTO from "../../../types/Recipe/CreateRecipeDTO";
import IngredientInputList from "../../molecules/IngredientInputList/IngredientInputList";
import MuiTextareaAutosize from "../../atoms/MuiTextareaAutosize/MuiTextareaAutosize";
import * as Yup from "yup";
import { Typography } from "@mui/material";
import RecipesService from "../../../services/RecipesService";
import { useData } from "../../../contexts/DataContext";
interface PropsType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreateRecipeDialog({ open, setOpen }: PropsType) {
  const handleClose = () => {
    setOpen(false);
  };

  const {refreshRecipes} = useData()

  const validationSchema = Yup.object().shape({
    image: Yup.string().required("Can't be empty"),
    name: Yup.string().required("Can't be empty").max(255, "name is too long"),
    description: Yup.string().required("Can't be empty"),
    recipeIngredients: Yup.array().of(
      Yup.object({
        ingredient: Yup.object({id: Yup.string().required("Can't be empty")}),
        weightInGram: Yup.number()
          .required("Can't be empty")
          .min(1, "Can't be less than 1"),
      })
    ),
  });

  return (
    <Dialog open={open} onClose={handleClose}>
      <div style={{ backgroundColor: "#37474F" }}>
        <DialogTitle sx={{ color: "white" }}>Create Recipe</DialogTitle>
        <Formik
          validationSchema={validationSchema}
          validateOnMount={false}
          validateOnChange={false}
          initialValues={{
            image: "",
            name: "",
            recipeIngredients: [],
            description: "",
          }}
          onSubmit={(value: CreateRecipeDTO) => {
            console.log(value);
            RecipesService().create(value).then(() => refreshRecipes()).then(() => handleClose())
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
                      setFieldValue("recipeIngredients", value)
                    }
                  />
                  {errors.recipeIngredients !== undefined && (
                    <Typography color="red" variant="caption">
                      Please validate the input list
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
