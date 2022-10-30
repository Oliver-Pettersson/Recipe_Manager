import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import Comment from "../../../types/Comment/Comment";
import MuiButton from "../../atoms/MuiButton/MuiButton";
import MuiTextareaAutosize from "../../atoms/MuiTextareaAutosize/MuiTextareaAutosize";
import * as Yup from "yup"  
  interface PropsType {
    open: boolean;
    setOpen: (value: boolean) => void;
    comment?: Comment;
  }
  
  export default function AddResponseDialog({
    open,
    setOpen,
    comment,
  }: PropsType) {
    const handleClose = () => {
      setOpen(false);
    };
    const validationSchema = Yup.object({
      comment: Yup.string().required("Can't be empty")
    })
    return (
      <Dialog open={open} onClose={handleClose}>
        <div style={{ backgroundColor: "#37474F", width: "100%" }}>
          <Formik validationSchema={validationSchema} initialValues={{ comment: "" }} onSubmit={(value) => {console.log(value)}}>
            {({ handleChange, handleSubmit, errors }) => (
              <>
                <DialogTitle sx={{ color: "white" }}>Response to {comment?.user.username || ""}</DialogTitle>
                <DialogContent sx={{ color: "white" }}>
                  <MuiTextareaAutosize
                  minRows={2}
                  style={{
                    marginTop: "20px",
                      width: "95%",
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
  