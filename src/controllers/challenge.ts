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
        handleHttp(res, "ERROR_GET_CHALLENGE");
    }
};

const get_Challenges =async (req:Request, res:Response) => {
    try{
        const response = await getChallenges();
        res.send(response);
    } catch(e){
        handleHttp(res, "ERROR_GET_Challenge");
    }
};

const update_Challenge =async ({params,body}:Request, res:Response) => {
    try{
        const {idChallenge} = params;
        const response = await updateChallenge(idChallenge, body);
        res.send(response);
    } catch (e){
        handleHttp(res, "ERROR_UPDATE_CHALLENGE")
    }
};

const post_Challenge = async ({body}:Request,res:Response)=>{
    try{
        const response = await insertChallenge(body);
        res.send(response);
    }catch(e){
        handleHttp(res,"ERROR_POST_CHALLENGE");
    }
};

const delete_Challenge = async ({params}:Request,res:Response)=>{
    try{
        const {idChallenge} = params;
        const response = await deleteChallenge(idChallenge);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_CHALLENGE");
    }
};

const accept_Challenge = async ({body}:Request,res:Response)=>{
    try{
        const { idUser, idChallenge } = body;
        const response = await acceptChallenge(idUser, idChallenge);
        res.send(response);
    }catch(e){
        handleHttp(res,"ERROR_ACCEPTING_CHALLENGE");
    }
};

export{get_Challenge, get_Challenges, update_Challenge, delete_Challenge, accept_Challenge, post_Challenge};