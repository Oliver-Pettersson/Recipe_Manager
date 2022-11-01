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
import CommentService from "../../../services/CommentService";
  interface PropsType {
    open: boolean;
    setOpen: (value: boolean) => void;
    referenceComment?: Comment;
    extendedSubmit: () => void;
  }
  
  export default function AddResponseDialog({
    open,
    setOpen,
    referenceComment,
    extendedSubmit
  }: PropsType) {
    const handleClose = () => {
      setOpen(false);
    };
    const validationSchema = Yup.object({
      comment: Yup.string().required("Can't be empty").max(255, "Input can't be longer than 255 characters")
    })
    return (
      <Dialog open={open} onClose={handleClose}>
        <div style={{ backgroundColor: "#37474F", width: "100%" }}>
          <Formik validationSchema={validationSchema} initialValues={{ comment: "" }} onSubmit={(value) => {
            referenceComment && CommentService().addReply({comment: value.comment, referenceComment: referenceComment?.id}).then(() => extendedSubmit()).then(() => handleClose())
      }}>
            {({ handleChange, handleSubmit, errors }) => (
              <>
                <DialogTitle sx={{ color: "white" }}>Response to {referenceComment?.user.username || ""}</DialogTitle>
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
  