import { Grid, Rating, Typography } from '@mui/material'
import React from 'react'
import RatingType from '../../../types/RatingType/RatingType'

interface PropsType {
  rating: RatingType
}

export default function MuiRating({rating} : PropsType) {
  const dateToString = (date: Date) => {
    let dateString = date.toLocaleString();
    return dateString.substring(0, dateString.length - 3);
  };
  return (
    <Grid container wrap="nowrap" spacing={2}>
      <Grid justifyContent="left" item xs zeroMinWidth>
        <Rating readOnly value={rating.rating} />
        <Typography variant='h4' style={{ margin: 0, textAlign: "left" }}>
          {rating.comment.user.username}
        </Typography>
        <Typography variant='body2' style={{ textAlign: "left" }}>{rating.comment.comment}</Typography>
        <Typography variant='body2' style={{ textAlign: "left", color: "gray" }}>
          {dateToString(rating.comment.timeStamp)}
        </Typography>
      </Grid>
    </Grid>
  )
}
