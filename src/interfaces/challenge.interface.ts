import { ObjectId } from "mongoose";

export interface Challenge {
    name: string;
    lat: string;
    long: string;
    descr: string;
    exp: number;
    users?: ObjectId[];
}