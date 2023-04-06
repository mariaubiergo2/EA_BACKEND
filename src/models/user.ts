import { Schema, model } from "mongoose";

import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: true,
        },
        surname: {
            type: String,
            required: true,
        },
        imageURL: {
            type: String,
            required: false,
        },
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        level: {
            type: Number,
            required: false,
        },
        exp: {
            type: Number,
            required: false,
        },
        followers: {
            type: [Schema.Types.ObjectId],
            ref: 'users',
        },
        following: {
            type: [Schema.Types.ObjectId],
            ref: 'users',
        },
        record: {
            type: [Schema.Types.ObjectId],
            ref: 'challenges',
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            required: false,
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

//Once the Schema is created, it must be implemented
//1st argument ('users') is the name of the collection
//2nd argument (UserSchema) is what it feds it
const UserModel = model('users', UserSchema);

export default UserModel;