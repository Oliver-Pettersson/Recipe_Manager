import React from "react";
import RatingType from "../../../types/RatingType/RatingType";
import { Divider, IconButton, Paper } from "@mui/material";
import MuiComment from "../../atoms/MuiComment/MuiComment";
import MuiRating from "../../atoms/MuiRating/MuiRating";
import ReplyIcon from "@mui/icons-material/Reply";
import Comment from "../../../types/Comment/Comment";

interface PropsType {
  rating: RatingType;
  setResponseDialog: React.Dispatch<
    React.SetStateAction<{
      isOpen: boolean;
      respondingComment?: Comment | undefined;
    }>
  >;
}

export default function RatingSection({
  rating,
  setResponseDialog,
}: PropsType) {
  const renderRecursive = (comment: Comment) : JSX.Element => (
    <>
      <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
      <MuiComment
        responseTo={rating.comment.user.username}
        comment={comment}
      />
      <div style={{ textAlign: "right" }}>
        <IconButton
          onClick={() =>
            setResponseDialog({
              isOpen: true,
              respondingComment: comment,
            })
          }
        >
          <ReplyIcon sx={{ color: "#63A4FF" }} />
        </IconButton>
      </div>
      {comment.comments.map((subcomment) => renderRecursive(subcomment))}
    </>
  );

  return (
    <div style={{ padding: "0px 40px" }}>
      <Paper style={{ padding: "40px 20px", marginTop: 100 }}>
        <MuiRating rating={rating} />
        <div style={{ textAlign: "right" }}>
          <IconButton
            onClick={() =>
              setResponseDialog({
                isOpen: true,
                respondingComment: rating.comment,
              })
            }
          >
            <ReplyIcon sx={{ color: "#63A4FF" }} />
          </IconButton>
        </div>
        {rating.comment.comments.map((subComment) => renderRecursive(subComment))}
      </Paper>
    </div>
  );
}
