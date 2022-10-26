import UserEntity from "./UserEntity";

export default interface User extends Omit<UserEntity, 'password'> {
    
}