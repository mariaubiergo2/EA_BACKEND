import { Types } from "mongoose";

import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import ChallengeModel from "../models/user";

const get_Users = async() => {
    const responseItem = await UserModel.find({}).limit(20);
    return responseItem;
};

const get_User = async(idUser: string) => {
    const responseItem = await UserModel.findOne({_id: idUser});
    return responseItem;
};

const log_in = async(credential: string, password: string) => {
    const responseItem = await UserModel.findOne({email: credential}, {password: password});
    return responseItem;
};

const sign_up = async(item: User) => {
    const responseItem = await UserModel.create(item);
    return responseItem;
};

const update_User = async(idUser: string, data: User) => {
    const responseItem = await UserModel.findOneAndUpdate({_id: idUser}, data, {new: true});
    return responseItem;
};

const add_Friend = async(idUser: string, usernameFriend: string) => {
    const friend = await UserModel.findOne({username: usernameFriend});   
    const responseItem = await UserModel.findOneAndUpdate({_id: idUser}, 
        {$addToSet: {record: new Types.ObjectId(friend?.id)}}, {new: true});
    return responseItem;
};

const delete_Friend = async(idUser: string) => {
    const responseItem = await UserModel.findOneAndRemove({_id: idUser});
    return responseItem;
};

const add_Challenge = async(idUser: string, nameChallenge: string) => {
    const challenge = await ChallengeModel.findOne({name: nameChallenge});
    const responseItem = await UserModel.findOneAndUpdate({_id: idUser},
        {$addToSet: {record: new Types.ObjectId(challenge?.name)}}, {new: true});
    return responseItem;
};

const disable_User = async(idUser: string) => {
    const responseItem = await UserModel.findOneAndUpdate({_id: idUser}, { active: false }, {new:true});
    return responseItem;
};

const delete_User = async(idUser: string) => {
    const responseItem = await UserModel.findOneAndRemove({_id: idUser});
    return responseItem;
};

export { get_Users, get_User, log_in, sign_up, update_User, add_Friend, delete_Friend, add_Challenge, disable_User, delete_User };
