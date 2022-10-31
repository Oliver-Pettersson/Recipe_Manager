import { useState } from "react";
import Comment from "../../../types/Comment/Comment";
import RatingType from "../../../types/RatingType/RatingType";
import MuiButton from "../../atoms/MuiButton/MuiButton";
import RatingSection from "../../molecules/RatingSection/RatingSection";
import AddResponseDialog from "../AddResponseDialog/AddResponseDialog";
import CreateRatingDialog from "../CreateRatingDialog/CreateRatingDialog";

interface PropsType {
  defaultRatings: RatingType[];
  recipeID: string;
}

export default function CommentSection({ defaultRatings, recipeID }: PropsType) {
  
  const [ratings, setRatings] = useState(defaultRatings);
  const [createRatingDialogIsOpen, setCreateRatingDialogIsOpen] =
    useState(false);
  const [responseDialog, setResponseDialog] = useState<{
    isOpen: boolean;
    respondingComment?: Comment;
  }>({ isOpen: false, respondingComment: undefined });
  const refreshCommentSection = () => {
    console.log("WIP")
  }
  return (
    <>
      <MuiButton
        style={{ float: "right" }}
        onClick={() => setCreateRatingDialogIsOpen(true)}
      >
        + Add Rating
      </MuiButton>
      <div style={{ overflowY: "scroll", height: "250px", width: "100%" }}>
        {ratings.map((rating) => (
          <RatingSection
            setResponseDialog={setResponseDialog}
            rating={rating}
          />
        ))}
      </div>
      <CreateRatingDialog
        open={createRatingDialogIsOpen}
        recipeID={recipeID}
        setOpen={setCreateRatingDialogIsOpen}
        extendedSubmit={refreshCommentSection}
      />
      <AddResponseDialog
        open={responseDialog.isOpen}
        extendedSubmit={refreshCommentSection}
        comment={responseDialog.respondingComment}
        setOpen={(value) =>
          setResponseDialog({
            isOpen: value,
            respondingComment: responseDialog.respondingComment,
          })
        }
      />
    </>
  );
}
