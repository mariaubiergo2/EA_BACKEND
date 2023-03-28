import { ObjectId } from "mongodb";

export interface User {
    name: string;
    surname: string;
    username: string;
    email: string;
    password: string;
    level: Number;          
    exp: Number;            
    friends?: ObjectId[];
    record?: ObjectId[];    //Challenges que ha finalitzat
    role: "user" | "admin";
}