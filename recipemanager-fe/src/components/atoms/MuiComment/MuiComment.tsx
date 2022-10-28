import { Grid, Typography } from "@mui/material";
import React from "react";
import Comment from "../../../types/Comment/Comment";

interface PropsType {
  comment: Comment;
  responseTo: string;
}

export default function MuiComment({ comment, responseTo }: PropsType) {
  const dateToString = (date: Date) => {
    let dateString = date.toLocaleString();
    return dateString.substring(0, dateString.length - 3);
  };
  return (
    <Grid container wrap="nowrap" spacing={2}>
      <Grid justifyContent="left" item xs zeroMinWidth>
        <Typography variant="h4" style={{ margin: 0, textAlign: "left" }}>
          {comment.user.username}
        </Typography>
        <Typography variant="subtitle1" style={{ margin: 0, textAlign: "left" }}>
          responds to {responseTo}
        </Typography>
        <Typography variant="body2" style={{ textAlign: "left" }}>{comment.comment}</Typography>
        <Typography variant="body2" style={{ textAlign: "left", color: "gray" }}>
          {dateToString(comment.timeStamp)}
        </Typography>
      </Grid>
    </Grid>
  );
}
