import { useState } from "react";
import Comment from "../../../types/Comment/Comment";
import RatingType from "../../../types/RatingType/RatingType";
import MuiButton from "../../atoms/MuiButton/MuiButton";
import RatingSection from "../../molecules/RatingSection/RatingSection";
import AddResponseDialog from "../AddResponseDialog/AddResponseDialog";
import CreateRatingDialog from "../CreateRatingDialog/CreateRatingDialog";

interface PropsType {
  ratings: RatingType[];
  recipeID: string;
}

export default function CommentSection({ ratings, recipeID }: PropsType) {
  const [createRatingDialogIsOpen, setCreateRatingDialogIsOpen] =
    useState(false);
  const [responseDialog, setResponseDialog] = useState<{
    isOpen: boolean;
    respondingComment?: Comment;
  }>({ isOpen: false, respondingComment: undefined });
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
      />
      <AddResponseDialog
        open={responseDialog.isOpen}
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
