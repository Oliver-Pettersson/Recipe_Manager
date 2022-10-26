import Rating from "./Rating";

export default interface CreateRatingDTO extends Omit<Rating, "comment">{
    comment: string
}