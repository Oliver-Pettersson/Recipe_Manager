import User from "../User/User";

export default interface Comment {
    user: User,
    timeStamp: Date,
    comment: string,
    comments: Comment[]
}