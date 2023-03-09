import { ObjectId } from "mongoose";

export interface Challenge {
    lat: string;
    long: string;
    users?: ObjectId[];
    xp: number;
    descr: string;
}