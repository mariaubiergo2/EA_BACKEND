import { Request,Response } from "express";
import { insertChallenge, getChallenge, getChallenges, updateChallenge, deleteChallenge, acceptChallenge } from "../services/challenge"; 
import { handleHttp } from "../utils/error.handle";

const get_Challenge =async ({params}:Request, res:Response) => {
    try{
        const {idChallenge} = params;
        const response = await getChallenge(idChallenge);
        const data = response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res, "ERROR_GET_SUBJECT");
    }
};

const get_Challenges =async (req:Request, res:Response) => {
    try{
        const response = await getChallenges();
        res.send(response);
    } catch(e){
        handleHttp(res, "ERROR_GET_SUBJECT");
    }
};

const update_Challenge =async ({params,body}:Request) => {
    
}