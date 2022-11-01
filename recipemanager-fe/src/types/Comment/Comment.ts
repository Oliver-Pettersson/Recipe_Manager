import User from "../User/User";

export default interface Comment {
    id: string,
    user: User,
    timeStamp: string,
    comment: string,
    comments: Comment[]
}