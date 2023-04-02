import { Request,Response } from "express";

import { handleHttp } from "../utils/error.handle";
import { get_Users, get_User, log_in, sign_up, update_User, add_Friend, delete_Friend, add_Challenge, disable_User, delete_User } from "../services/user";

const getUsers = async(req:Request, res:Response)=>{
    try{
        const response = await get_Users();
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_USERS");
    }
};

const getUser = async({params}:Request, res:Response)=>{
    try{
        const {idUser} = params;
        const response = await get_User(idUser);
        const data = response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_USER");
    }
};

const login = async({params}:Request, res:Response)=>{
    try{
        const {email, password} = params;
        const response = await log_in(email, password);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_LOGIN");
    }
};

const signup = async({body}:Request, res:Response)=>{
    try{
        const response = await sign_up(body);
        res.send(response);
    }catch(e){
        handleHttp(res,"ERROR_SIGNUP");
    }
};

const updateUser = async ({params,body}:Request, res:Response)=>{
    try{
        const {idUser} = params;
        const response = await update_User(idUser, body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_USER");
    }
};

const addFriend = async ({params}:Request, res:Response)=>{
    try{
        const {idUser, usernameFriend} = params;
        const responsePerson = await add_Friend(idUser, usernameFriend);
        res.send(responsePerson);
    }catch(e){
        handleHttp(res,"ERROR_POST_USER");
    }
};

const deleteFriend = async ({params}:Request, res:Response)=>{
    try{
        const {idUser} = params;
        const response = await delete_Friend(idUser);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_USER");
    }
};

const addChallenge = async ({params}:Request, res:Response)=>{
    try{
        const {idUser, namechallenge} = params;
        const responsePerson = await add_Challenge(idUser, namechallenge);
        res.send(responsePerson);
    }catch(e){
        handleHttp(res,"ERROR_POST_USER");
    }
};

const disableUser = async ({params}:Request, res:Response)=>{
    try{
        const {idUser} = params;
        const response = await disable_User(idUser);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DISABLE_USER");
    }
};

const deleteUser = async ({params}:Request, res:Response)=>{
    try{
        const {idUser} = params;
        const response = await delete_User(idUser);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_USER");
    }
};

export{ getUsers, getUser, login, signup, updateUser, addFriend, deleteFriend, addChallenge, disableUser, deleteUser };