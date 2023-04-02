import { Types } from "mongoose";

import { Challenge } from '../interfaces/challenge.interface';
import ChallengeModel from "../models/challenge";

const get_Challenges = async() => {
    const responseItem = await ChallengeModel.find({}).limit(20);
    return responseItem;
};

const get_Challenge = async (id: string) => {
    const responseItem = await ChallengeModel.findOne({_id: id}); 
    return responseItem;
};

const add_Challenge = async (item: Challenge) => {
    const responseInsert = await ChallengeModel.create(item);
    return responseInsert;
};

const update_Challenge = async (id: string, data: Challenge) => {
    const responseItem = await ChallengeModel.findOneAndUpdate({_id: id}, data, {new: true}); 
    return responseItem;
};

const accept_Challenge = async (idUser: string, id: string) => {
    const responseItem = await ChallengeModel.findOneAndUpdate({_id: id}, 
        {$addToSet: {users: new Types.ObjectId(idUser)}}, {new:true}); 
    return responseItem;
};

const disable_Challenge = async (id: string) => {
    const responseItem = await ChallengeModel.findOneAndUpdate({_id: id}, 
        {$addToSet: {active: false}}, {new:true});
    return responseItem;
};

const delete_Challenge = async (id: string) => {
    const responseItem = await ChallengeModel.deleteOne({_id: id});
    return responseItem;
};

export{ get_Challenges, get_Challenge, add_Challenge, update_Challenge, accept_Challenge, disable_Challenge, delete_Challenge };