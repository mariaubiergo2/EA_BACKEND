import { Request,Response } from "express";

import { handleHttp } from "../utils/error.handle";
import { get_Users, get_User, get_UserCount, get_UsersProfile, get_UserProfile, log_in, 
    sign_up, update_User, add_Follow, delete_Follow, add_Challenge, disable_User, delete_User, unable_User } from "../services/user";

const getUsers = async(req:Request, res:Response) => {
    try{
        const response = await get_Users();
        res.send(response);
    } catch(e){
        handleHttp(res, "ERROR_GET_USERS");
    }
};

const getUser = async({params}:Request, res:Response) => {
    try{
        const {idUser} = params;
        const response = await get_User(idUser);
        const data = response ? response: "NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res, "ERROR_GET_USER");
    }
};

const getUserCount = async(req:Request, res:Response) => {
    try{
        const response = await get_UserCount();
        res.send(response.toString());
    } catch(e){
        handleHttp(res, "ERROR_COUNTING_USERS");
    }
};

const getUsersProfile = async(req:Request, res:Response) => {
    try{
        const response = await get_UsersProfile();
        res.send(response);
    } catch(e){
        handleHttp(res, "ERROR_GET_USERS");
    }
};

const getUserProfile = async({params}:Request, res:Response) => {
    try{
        const {idUser} = params;
        const response = await get_UserProfile(idUser);
        const data = response ? response: "NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res, "ERROR_GET_USER");
    }
};

const login = async({params}:Request, res:Response) => {
    try{
        const {email, password} = params;
        const response = await log_in(email, password);
        res.send(response);
    } catch(e){
        handleHttp(res, "ERROR_LOGIN");
    }
};

const signup = async({body}:Request, res:Response) => {
    try{
        const response = await sign_up(body);
        res.send(response);
    }catch(e){
        handleHttp(res, "ERROR_SIGNUP");
    }
};

const updateUser = async ({params, body}:Request, res:Response) => {
    try{
        const {idUser} = params;
        const response = await update_User(idUser, body);
        res.send(response);
    } catch(e){
        handleHttp(res, "ERROR_UPDATE_USER");
    }
};

const addFollow = async ({params}:Request, res:Response) => {
    try{
        const {idUser, idFollowed} = params;
        const response = await add_Follow(idUser, idFollowed);
        res.send(response);
    }catch(e){
        handleHttp(res, "ERROR_POST_FRIEND");
    }
};

const deleteFollow = async ({params}:Request, res:Response) => {
    try{
        const {idUser, idFollowed} = params;
        const response = await delete_Follow(idUser, idFollowed);
        res.send(response);
    }catch(e){
        handleHttp(res, "ERROR_DELETE_FRIEND");
    }
};

const addChallenge = async ({params}:Request, res:Response) => {
    try{
        const {idUser, idChallenge} = params;
        const response = await add_Challenge(idUser, idChallenge);
        res.send(response);
    }catch(e){
        handleHttp(res, "ERROR_POST_USER");
    }
};

const disableUser = async ({params}:Request, res:Response) => {
    try{
        const {idUser} = params;
        const response = await disable_User(idUser);
        res.send(response);
    } catch(e){
        handleHttp(res, "ERROR_DISABLE_USER");
    }
};

const unableUser = async ({params}:Request, res:Response) => {
    try{
        const {idUser} = params;
        const response = await unable_User(idUser);
        res.send(response);
    } catch(e){
        handleHttp(res, "ERROR_UNABLE_USER");
    }
};

const deleteUser = async ({params}:Request, res:Response) => {
    try{
        const {idUser} = params;
        const response = await delete_User(idUser);
        res.send(response);
    } catch(e){
        handleHttp(res, "ERROR_DELETE_USER");
    }
};

export{ getUsers, getUser, getUserCount, getUsersProfile, getUserProfile, login, 
    signup, updateUser, addFollow, deleteFollow, addChallenge, disableUser, deleteUser, unableUser };