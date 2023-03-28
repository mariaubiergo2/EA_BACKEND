import {  Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interface";
import { ObjectId } from "mongodb";

const UserSchema = new Schema<User>(
    {
        name:{
            type: String,
            required:true,
        },
        surname:{
            type: String,
            required:true,
        },
        email:{
            type: String,
            required:true,
        },
        password:{
            type: String,
            required:true,
        },
        username:{
            type: String,
            required:true,
        },
        friends:{
            type: [Schema.Types.ObjectId],
            ref:'users',
        },
        level:{
            type: Number,
            required:true,
        },
        record:{
            type: [Schema.Types.ObjectId],
            ref:'challenges',
        },
        exp:{
            type: Number,
            required:true,
        },
        role:{
            type: String,
            required:true,
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