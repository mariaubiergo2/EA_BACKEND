import { Types } from "mongoose";

import { Challenge } from '../interfaces/challenge.interface';
import ChallengeModel from "../models/challenge";
import UserModel from "../models/user";

const get_AllChallenges = async() => {
    const responseItem = await ChallengeModel.find({});
    return responseItem;
};

const get_Challenges = async(pageNumber: number, nPerPage: number) => {
    const responseItem = await ChallengeModel.find({}).limit(nPerPage).skip((pageNumber - 1)*nPerPage);
    return responseItem;
};

const get_Challenge = async (idChallenge: string) => {
    const responseItem = await ChallengeModel.findById({_id: idChallenge}); 
    return responseItem;
};

const get_ChallengeCount = async() => {
    const responseItem = await ChallengeModel.find({}).count();
    return responseItem;
};

const add_Challenge = async (item: Challenge) => {
    const chall = await ChallengeModel.findOne({name: item.name})
    if (chall!=null)
        return "ALREADY_USED_NAME";
    item.active = true;
    const responseInsert = await ChallengeModel.create(item);
    return responseInsert;
};

const update_Challenge = async (idChallenge: string, data: Challenge) => {
    const chall = await ChallengeModel.findOne({name: data.name})
    if (chall!=null)
        return "ALREADY_USED_NAME";
    const responseItem = await ChallengeModel.findByIdAndUpdate({_id: idChallenge}, data, {new: true}); 
    return responseItem;
};

const accept_Challenge = async (idUser: string, idChallenge: string) => {
    const user = await UserModel.findById({_id: idUser});
    const responseItem = await ChallengeModel.findByIdAndUpdate({_id: idChallenge}, 
        {$addToSet: {users: new Types.ObjectId(user?.id)}}, {new: true}); 
    return responseItem;
};

const disable_Challenge = async (idChallenge: string) => {
    const responseItem = await ChallengeModel.findByIdAndUpdate({_id: idChallenge}, 
        {active: false}, {new: true});
    return responseItem;
};

const delete_Challenge = async (idChallenge: string) => {
    const responseItem = await ChallengeModel.findByIdAndRemove({_id: idChallenge});
    return responseItem;
};

export{ get_AllChallenges, get_Challenges, get_Challenge, get_ChallengeCount, add_Challenge, 
    update_Challenge, accept_Challenge, disable_Challenge, delete_Challenge };