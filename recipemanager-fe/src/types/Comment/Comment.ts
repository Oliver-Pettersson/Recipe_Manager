import User from "../User/User";

export default interface Comment {
    user: User,
    timeStamp: string,
    comment: string,
    comments: Comment[]
}