import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Rating,
    Typography
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import MuiButton from "../../atoms/MuiButton/MuiButton";
import MuiTextareaAutosize from "../../atoms/MuiTextareaAutosize/MuiTextareaAutosize";
import * as Yup from "yup"
interface PropsType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  recipeID?: string;
}

export default function CreateRatingDialog({
  open,
  setOpen,
  recipeID,
}: PropsType) {
  const handleClose = () => {
    setOpen(false);
  };
  const validationSchema = Yup.object({
    rating: Yup.number().typeError("Can only contain numbers").required("Can't be empty").min(1, "Can't be empty"),
    comment: Yup.string().required("Can't be empty")
  })
  return (
    <Dialog open={open} onClose={handleClose}>
      <div style={{ backgroundColor: "#37474F", width: "100%" }}>
        <Formik validationSchema={validationSchema} initialValues={{ rating: 0, comment: "" }} onSubmit={(value) => {console.log(value)}}>
          {({ handleChange, handleSubmit, errors }) => (
            <>
              <DialogTitle sx={{ color: "white" }}>Rating</DialogTitle>
              <DialogContent sx={{ color: "white" }}>
                <Rating name="rating" onChange={handleChange} />
                {errors.rating && (
                  <div><Typography color="red" variant="caption">
                    {errors.rating}
                  </Typography></div>
                )}
                <MuiTextareaAutosize
                minRows={2}
                style={{
                    width: "98%",
                    backgroundColor: "#102027",
                    color: "white",
                  }}
                  name="comment"
                  placeholder="Comment"
                  onChange={handleChange}
                />
                {errors.comment && (
                  <Typography color="red" variant="caption">
                    {errors.comment}
                  </Typography>
                )}
              </DialogContent>
              <DialogActions>
                <MuiButton onClick={handleClose}>Close</MuiButton>
                <MuiButton onClick={() => handleSubmit()} type="submit">Submit</MuiButton>
              </DialogActions>
            </>
          )}
        </Formik>
      </div>
    </Dialog>
  );
}
