import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Rating
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import MuiButton from "../../atoms/MuiButton/MuiButton";
import MuiTextareaAutosize from "../../atoms/MuiTextareaAutosize/MuiTextareaAutosize";

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
  return (
    <Dialog open={open} onClose={handleClose}>
      <div style={{ backgroundColor: "#37474F", width: "100%" }}>
        <Formik initialValues={{ rating: 0, comment: "" }} onSubmit={(value) => {console.log(value)}}>
          {({ handleChange, handleSubmit }) => (
            <>
              <DialogTitle sx={{ color: "white" }}>Rating</DialogTitle>
              <DialogContent sx={{ color: "white" }}>
                <Rating name="rating" onChange={handleChange} />
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
