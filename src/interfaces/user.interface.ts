import { ObjectId } from "mongodb";

export interface User {
    name: string;
    surname: string;
    imageURL: string;
    username: string; //User name that will appear in the application
    email: string;
    password: string;
    level: Number; //Level that depends on the experience > In order to level up: exp_actual = 50*next_level + 500 
    exp: Number; //Current user experience > Increases each time a challenge is accomplished
    followers?: ObjectId[];
    following?: ObjectId[];
    record?: ObjectId[]; //List of ended challenges
    role: "user" | "admin"; //admin == Has all the permissions 
    active: boolean; //When the user disables his or her account it is set false
}