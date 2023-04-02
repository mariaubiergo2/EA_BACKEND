import { ObjectId } from "mongoose";

export interface Challenge {
    name: string;
    lat: string;
    long: string;
    descr: string;
    exp: number; //Amount of experience that the challenge will give to the users
    users?: ObjectId[]; //Users that are currently doing the challenge
    active: boolean; //When an admin disables a challenge it is set false
}