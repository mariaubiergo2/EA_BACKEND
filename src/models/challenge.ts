import { Schema, model } from "mongoose";

import { Challenge } from "../interfaces/challenge.interface";

const ChallengeSchema = new Schema<Challenge>(
    {
        name: {
            type: String,
            required: true,
        },
        descr: {
            type: String,
            required: false,
        },
        lat: {
            type: String,
            required: true,
        },
        long: {
            type: String,
            required: true,
        },
        exp: {
            type: Number,
            required: true,
        },
        users: {
            type: [Schema.Types.ObjectId],
            ref: 'users',
        },
        active: {
            type: Boolean,
            required: false,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ChallengeModel = model('challenges', ChallengeSchema);

export default ChallengeModel;