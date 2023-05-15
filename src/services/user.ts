import { Types } from "mongoose";

import { User } from '../interfaces/user.interface';
import UserModel from "../models/user";
import ChallengeModel from "../models/user";

const get_AllUsers = async() => {
    const responseItem = await UserModel.find({});
    return responseItem;
};

const get_Users = async(pageNumber: number, nPerPage: number) => {
    const responseItem = await UserModel.find({}).limit(nPerPage).skip((pageNumber - 1)*nPerPage);
    return responseItem;
};

const get_User = async(idUser: string) => {
    const responseItem = await UserModel.findById({_id: idUser});
    return responseItem;
};

const get_UserCount = async() => {
    const responseItem = await UserModel.find({}).count();
    return responseItem;
};

const get_UsersProfile = async(pageNumber: number, nPerPage: number) => {
    const responseItem = await UserModel.find({}, {name: 0, surname: 0,
        email: 0, password: 0, role: 0, active: 0}).limit(nPerPage).skip((pageNumber - 1)*nPerPage);
    return responseItem;
};

const get_UserProfile = async(idUser: string) => {
    const responseItem = await UserModel.findById({_id: idUser}, {name: 0, surname: 0,
        email: 0, password: 0, role: 0, active: 0}); //Ignore those properties
    return responseItem;
};

const log_in = async(email: string, password: string) => {
    const user = await UserModel.findOne({email: email}, {password: password});
    const responseItem = await UserModel.findById({_id: user?.id}, {name: 0, surname: 0,
        email: 0, password: 0, role: 0, active: 0})
    return responseItem;
};

const sign_up = async(item: User) => {
    const user = await UserModel.findOne({email: item.email})
    if (user!=null)
        return "ALREADY_USED_EMAIL";
    if(!item.role) { item.role = "user"; } //If role is not specified then role = "user";
    item.active = true;
    const responseItem = await UserModel.create(item);
    return responseItem;
};

const update_User = async(idUser: string, data: User) => {
    const responseItem = await UserModel.findByIdAndUpdate({_id: idUser}, data, {new: true});
    return responseItem;
};

const add_Follow = async(idUser: string, idFollowed: string) => {
    const user = await UserModel.findById({_id: idUser}); //Person who is following
    const followed = await UserModel.findById({_id: idFollowed}); //Person being followed
    const responseItem = await UserModel.findByIdAndUpdate({_id: idUser},
        {$addToSet: {following: new Types.ObjectId(followed?.id)}}, {new: true})
        && UserModel.findByIdAndUpdate({_id: idFollowed},
        {$addToSet: {followers: new Types.ObjectId(user?.id)}}, {new: true});
    return responseItem;
};

const delete_Follow = async(idUser: string, idFollowed: string) => {
    const user = await UserModel.findById({_id: idUser}); //Person who is following
    const followed = await UserModel.findById({_id: idFollowed}); //Person being followed
    const responseItem = await UserModel.findByIdAndUpdate({_id: idUser},
        {$pull: {following: new Types.ObjectId(followed?.id)}}, {new: true})
        && UserModel.findByIdAndUpdate({_id: idFollowed},
        {$pull: {followers: new Types.ObjectId(user?.id)}}, {new: true});
    return responseItem;
};

const add_Challenge = async(idUser: string, idChallenger: string) => {
    const challenge = await ChallengeModel.findById({_id: idChallenger});
    const responseItem = await UserModel.findByIdAndUpdate({_id: idUser},
        {$addToSet: {record: new Types.ObjectId(challenge?.id)}}, {new: true});
    return responseItem;
};

const disable_User = async(idUser: string) => {
    const responseItem = await UserModel.findByIdAndUpdate({_id: idUser},
        {active: false}, {new: true});
    return responseItem;
};

const unable_User = async(idUser: string) => {
    const responseItem = await UserModel.findByIdAndUpdate({_id: idUser},
        {active: true}, {new: true});
    return responseItem;
};

const delete_User = async(idUser: string) => {
    const responseItem = await UserModel.findByIdAndRemove({_id: idUser});
    return responseItem;
};

const get_user_friends = async (idUser: string, data: User) => {
    const responseItem = await UserModel.findById(
        {_id: idUser},
        data,
        {
            new:true
        },).populate('followers');
    if (responseItem?.followers?.length!=0 && responseItem!=null)
    {
        const responseItem2 = responseItem.followers
        return responseItem2;
    }
        return responseItem;
};


export { get_AllUsers, get_Users, get_User, get_UserCount, get_UsersProfile, get_UserProfile, log_in,
    sign_up, update_User, add_Follow, delete_Follow, add_Challenge, disable_User, delete_User, unable_User, get_user_friends };

