import { Schema, model } from "mongoose";

import { Challenge } from "../interfaces/challenge.interface";

const ChallengeSchema = new Schema<Challenge>(
    {
        name:{
            type: String,
            required:true,
        },
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
        active:{
            type: Boolean,
            required:true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ChallengeModel = model('challenges', ChallengeSchema);

export default ChallengeModel;