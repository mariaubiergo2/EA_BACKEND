import { ObjectId } from "mongodb";

export interface Itinerario {
    name: string;
    descr: string;
    challenges?: ObjectId[];
    insignia: string;
}