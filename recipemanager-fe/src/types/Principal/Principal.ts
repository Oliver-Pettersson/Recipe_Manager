import UserEntity from "../User/UserEntity";

export default interface Principal extends Omit<UserEntity, 'password'>{
    username: string
}