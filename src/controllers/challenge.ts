import { Request, Response } from "express";

import { handleHttp } from "../utils/error.handle";
import { solve_Challenge, get_AllChallenges, get_Challenges, get_Challenge, get_ChallengeCount, add_Challenge, update_Challenge, 
    accept_Challenge, disable_Challenge, delete_Challenge, get_not_completed } from "../services/challenge"; 

const getAllChallenges = async (req:Request, res:Response) => {
    try{
        const response = await get_AllChallenges();
        res.send(response);
    } catch(e){
        handleHttp(res, "ERROR_GET_ALL_CHALLENGES");
    }
};

const getChallenges = async ({params}:Request, res:Response) => {
    try{
        const {pageNumber, nPerPage} = params;
        const response = await get_Challenges(Number(pageNumber), Number(nPerPage));
        res.send(response);
    } catch(e){
        handleHttp(res, "ERROR_GET_CHALLENGES");
    }
};

const getAvailableChallenges = async ({params,body}:Request, res:Response) => {
    try{
        const {idUser} = params;
        const response = await get_not_completed(idUser, body);
        res.send(response)
    } catch(e){
        handleHttp(res, "ERROR_GET_NOT_FRIENDS")
    }
};

const getChallenge = async ({params}:Request, res:Response) => {
    try{
        const {idChallenge} = params;
        const response = await get_Challenge(idChallenge);
        const data = response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res, "ERROR_GET_CHALLENGE");
    }
};

const getChallengeCount = async (req:Request, res:Response) => {
    try{
        const response = await get_ChallengeCount();
        res.send(response.toString());
    } catch(e){
        handleHttp(res, "ERROR_COUNTING_CHALLENGES");
    }
};

const addChallenge = async ({body}:Request, res:Response) => {
    try{
        const response = await add_Challenge(body);
        if (response===("ALREADY_USED_NAME")){
            res.status(400);
            res.send(response)
        }
        else {
            res.send(response);
        }
    }catch(e){
        handleHttp(res,"ERROR_POST_CHALLENGE");
    }
};

const updateChallenge = async ({params, body}:Request, res:Response) => {
    try{
        const {idChallenge} = params;
        const response = await update_Challenge(idChallenge, body);
        res.send(response);
    } catch (e){
        handleHttp(res, "ERROR_UPDATE_CHALLENGE")
    }
};

const acceptChallenge = async ({params}:Request, res:Response) => {
    try{
        const {idUser, idChallenge} = params;
        const response = await accept_Challenge(idUser, idChallenge);
        res.send(response);
    }catch(e){
        handleHttp(res, "ERROR_ACCEPTING_CHALLENGE");
    }
};

const disableChallenge = async ({params}:Request, res:Response) => {
    try{
        const {idChallenge} = params;
        const response = await disable_Challenge(idChallenge);
        res.send(response);
    } catch(e){
        handleHttp(res, "ERROR_DISABLE_CHALLENGE");
    }
};

const deleteChallenge = async ({params}:Request, res:Response) => {
    try{
        const {idChallenge} = params;
        const response = await delete_Challenge(idChallenge);
        res.send(response);
    } catch(e){
        handleHttp(res, "ERROR_DELETE_CHALLENGE");
    }
};

const solveChallenge = async ({body}:Request, res:Response) => {
    try{
        const {idChallenge, answer, idUser} = body;
        const response = await solve_Challenge(idChallenge, answer, idUser);
        res.send(response);
    }catch(e){
        handleHttp(res, "ERROR_SOLVING_CHALLENGE");
    }
};
export{ getAvailableChallenges, solveChallenge, getAllChallenges, getChallenges, getChallenge, getChallengeCount, addChallenge, updateChallenge, 
    acceptChallenge, disableChallenge, deleteChallenge };