import { Types } from "mongoose";

import { Challenge } from '../interfaces/challenge.interface';
import ChallengeModel from "../models/challenge";
import UserModel from "../models/user";

const get_Challenges = async() => {
    const responseItem = await ChallengeModel.find({}).limit(10);
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
    item.active = true;
    const responseInsert = await ChallengeModel.create(item);
    return responseInsert;
};

const update_Challenge = async (idChallenge: string, data: Challenge) => {
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

export{ get_Challenges, get_Challenge, get_ChallengeCount, add_Challenge, 
    update_Challenge, accept_Challenge, disable_Challenge, delete_Challenge };