import Principal from "../Principal/Principal";

export default interface User extends Principal {
    password: string,
} 