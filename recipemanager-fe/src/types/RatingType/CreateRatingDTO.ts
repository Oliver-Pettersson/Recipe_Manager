import RatingType from "./RatingType";

export default interface CreateRatingDTO extends Omit<RatingType, "comment">{
    comment: string
}