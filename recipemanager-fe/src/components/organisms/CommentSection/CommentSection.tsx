import React from "react";
import RatingType from "../../../types/RatingType/RatingType";
import RatingSection from "../../molecules/RatingSection/RatingSection";

interface PropsType {
  ratings: RatingType[];
}

export default function CommentSection({ ratings }: PropsType) {
  return (
    <div style={{overflowY: "scroll", height: "400px", width: "100%"}}>
      {ratings.map((rating) => (
        <RatingSection rating={rating} />
      ))}
    </div>
  );
}
