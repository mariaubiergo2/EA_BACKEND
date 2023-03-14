import { ObjectId } from "mongodb";

export interface User {
    name: string;
    surname: string;
    email: string;
    password: string;
    username: string;
    friends?: ObjectId[];
    level: Number;
    record?: ObjectId[]; //Challenges que ha finalitzat
    exp: Number;
}