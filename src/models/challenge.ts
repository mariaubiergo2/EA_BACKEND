import {  Schema, Types, model, Model } from "mongoose";
import { Challenge } from "../interfaces/challenge.interface";

const ChallengeSchema = new Schema<Challenge>(
    {
        lat:{
            type: String,
            required:true,
        },
        long:{
            type: String,
            required:true,
        },
        users:{
            type: [Schema.Types.ObjectId],
            ref:'users',
        },
        xp:{
            type: Number,
            required:true,
        },
        descr:{
            type: String,
            required:true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

//Once the Schema is created, it must be implemented
//1st argument ('users') is the name of the collection
//2nd argument (UserSchema) is what it feds it
const ChallengeModel = model('challenges', ChallengeSchema);

export default ChallengeModel;