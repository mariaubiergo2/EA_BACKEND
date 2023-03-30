import { Types } from "mongoose";
import { Challenge } from "../interfaces/challenge.interface";
import ChallengeModel from "../models/challenge";

const insertChallenge = async (item:Challenge) => {
    const responseInsert = await ChallengeModel.create(item);
    return responseInsert;
};

const getChallenges = async() => {
    const responseItem = await ChallengeModel.find({}).limit(20);
    return responseItem;
};

const getChallenge =async (id:String) => {
    const responseItem = await ChallengeModel.findOne({_id:id}).populate('users');
    return responseItem;
};

const updateChallenge = async (id:String, data:Challenge) => {
    const responseItem = await ChallengeModel.findOneAndUpdate(
        {_id:id},
        data,
        {
            new:true,
        }
    ).populate('users');
    return responseItem;
};

const deleteChallenge =async (id:String) => {
    const responseItem = await ChallengeModel.deleteOne({_id:id});
    return responseItem;
};

const acceptChallenge =async (idUser:string, idChallenge:string) => {
    const responseItem = await ChallengeModel.findOneAndUpdate(
        {_id:idChallenge},
        {$addToSet: {users: new Types.ObjectId(idUser)}},
        {new:true}
    ).populate('users');
    return responseItem;
}

export{ insertChallenge, getChallenge, getChallenges, updateChallenge, deleteChallenge, acceptChallenge};