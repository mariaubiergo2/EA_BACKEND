import { Request,Response } from "express";
import {delete_User, disable_User, add_Challenge, delete_Friend, add_Friend, update_User, sign_up, log_in, get_User, get_Users } from "../services/user";
import { handleHttp } from "../utils/error.handle";

const getUser=async({params}:Request,res:Response)=>{
    try{
        const {idUser} = params;
        const response = await get_User(idUser);
        const data = response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_USER");
    }
};

const getUsers = async(req:Request,res:Response)=>{
    try{
        const response = await get_Users();
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_USERS");
    }
};

const login = async({params}:Request,res:Response)=>{
    try{
        const {email, password} = params;
        const response = await log_in(email, password);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_LOGIN");
    }
};

const signup = async({body}:Request,res:Response)=>{
    try{
        const response = await sign_up(body);
        res.send(response);
    }catch(e){
        handleHttp(res,"ERROR_SIGNUP");
    }
};

const updateUser = async ({params,body}:Request,res:Response)=>{
    try{
        const {idUser} = params;
        const response = await update_User(idUser,body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_USER");
    }
};

const addChallenge = async ({params}:Request,res:Response)=>{
    try{
        const {idUser, namechallenge} = params;
        const responsePerson = await add_Challenge(idUser, namechallenge);
        res.send(responsePerson);
    }catch(e){
        handleHttp(res,"ERROR_POST_USER");
    }
};

const deleteFriend = async ({params}:Request,res:Response)=>{
    try{
        const {idUser}=params;
        const response=await delete_Friend(idUser);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_USER");
    }
};

const addFriend = async ({params}:Request,res:Response)=>{
    try{
        const {idUser, usernameFriend} = params;
        const responsePerson=await add_Friend(idUser, usernameFriend);
        res.send(responsePerson);
    }catch(e){
        handleHttp(res,"ERROR_POST_USER");
    }
};

const deleteUser = async ({params}:Request,res:Response)=>{
    try{
        const {idUser} = params;
        const response = await delete_User(idUser);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_USER");
    }
};

const disableUser = async ({params}:Request,res:Response)=>{
    try{
        const {idUser} = params;
        const response = await disable_User(idUser);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DISABLE_USER");
    }
};

export{ deleteUser, disableUser, addChallenge, deleteFriend, addFriend, updateUser, signup, login, getUser, getUsers };