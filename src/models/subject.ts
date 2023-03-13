import {  Schema, Types, model, Model } from "mongoose";
import { Subject } from "../interfaces/subject.interface";

const SubjectSchema = new Schema<Subject>(
    {
        name:{
            type: String,
            required:true,
        },
        users:{
            type: [Schema.Types.ObjectId],
            ref:'users',
        },
        semester:{
            type: Number,
            required:true,
        },
        difficulty:{
            type: String,
            enum: ["easy", "medium", "hard"],
            required:true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const SubjectModel = model('subjects', SubjectSchema);

export default SubjectModel;