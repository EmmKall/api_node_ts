import { Auth } from "./auth.interface";

export interface User extends Auth
{
    _id:            string;
    name:           string;
    last_name:      string;
    phone:          string;
    token:          string;
    email_verified: boolean;
    rol:            number;
    profile:        String;
    created_at:     string;
    updated_at:     string;
}