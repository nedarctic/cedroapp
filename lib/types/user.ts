import { UserRole } from "../enum/user-role";

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    refreshToken: string;
    role: UserRole;
    createdAt: string;
    updatedAt: string;
}