import { ObjectId } from "mongoose";

export interface Subject {
    name: string;
    users?: ObjectId[];
    semester: number;
    difficulty: "easy" | "medium" | "hard";
}