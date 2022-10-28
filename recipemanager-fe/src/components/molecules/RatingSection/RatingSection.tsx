import React from "react";
import RatingType from "../../../types/RatingType/RatingType";
import { Divider, Paper } from "@mui/material";
import MuiComment from "../../atoms/MuiComment/MuiComment";
import MuiRating from "../../atoms/MuiRating/MuiRating";

interface PropsType {
  rating: RatingType;
}

export default function RatingSection({ rating }: PropsType) {
  return (
    <div style={{padding: "0px 40px"}}>
      <Paper style={{ padding: "40px 20px", marginTop: 100 }}>
        <MuiRating rating={rating} />
        {rating.comment.comments.map((subComment) => (
          <>
            <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
            <MuiComment
              responseTo={rating.comment.user.username}
              comment={subComment}
            />
          </>
        ))}
      </Paper>
    </div>
  );
}
