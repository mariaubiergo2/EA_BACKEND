import { ObjectId } from "mongoose";

export interface Challenge {
    name: string;
    lat: string;
    long: string;
    users?: ObjectId[];
    xp: number;
    descr: string;
}