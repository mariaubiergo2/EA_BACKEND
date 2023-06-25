import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { get_AllUsers, get_User, get_Users, get_UserCount, get_UsersProfile, get_UserProfile, log_in,
    sign_up, update_User, add_Follow, delete_Follow, add_Challenge, disable_User, delete_User, unable_User,
     get_following, get_not_following, get_following_count, get_followers_count, get_not_following_count, get_followers } from "../services/user";
import { encrypt } from "../utils/bcrypt.handle";

const getAllUsers = async(req:Request, res:Response) => {
    try{
        const response = await get_AllUsers();
        res.send(response);
    } catch(e){
        handleHttp(res, "ERROR_GET_ALL_USERS");
    }
};

const getUsers = async({params}:Request, res:Response) => {
    try{
        const {pageNumber, nPerPage} = params;
        const response = await get_Users(Number(pageNumber), Number(nPerPage));
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

const getUsersProfile = async({params}:Request, res:Response) => {
    try{
        const {pageNumber, nPerPage} = params;
        const response = await get_UsersProfile(Number(pageNumber), Number(nPerPage));
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
        if (response===("ALREADY_USED_EMAIL")){
            res.status(400);
            res.send(response)
        }
        else {
            res.send(response);
        }
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
        if (idUser===idFollowed){
            res.status(400);
            res.send("ERROR_SAME_USER");
        }
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

const getFollowing = async ({params, body}:Request, res:Response) => {
    try{
        const {idUser} = params;
        const response = await get_following(idUser, body);
        res.send(response)
    } catch(e){
        handleHttp(res, "ERROR_GET_FRIENDS")
    }
}

const getFollowingCount = async ({params, body}:Request, res:Response) => {
    try{
        const {idUser} = params;
        const response = await get_following_count(idUser, body);
        res.send(response?.toString())
    } catch(e){
        handleHttp(res, "ERROR_GET_FRIENDS")
    }
}

const getFollowers = async ({params, body}:Request, res:Response) => {
    try{
        const {idUser} = params;
        const response = await get_followers(idUser, body);
        res.send(response)
    } catch(e){
        handleHttp(res, "ERROR_GET_NOT_FRIENDS")
    }
}

const getFollowersCount = async ({params, body}:Request, res:Response) => {
    try{
        const {idUser} = params;
        const response = await get_followers_count(idUser, body);
        res.send(response?.toString())
    } catch(e){
        handleHttp(res, "ERROR_GET_FRIENDS")
    }
}

const getNotFollowing = async ({params, body}:Request, res:Response) => {
    try{
        const {idUser} = params;
        const response = await get_not_following(idUser, body);
        res.send(response)
    } catch(e){
        handleHttp(res, "ERROR_GET_NOT_FRIENDS")
    }
}

const getNotFollowingCount = async ({params, body}:Request, res:Response) => {
    try{
        const {idUser} = params;
        const response = await get_not_following_count(idUser, body);
        res.send(response.toString())
    } catch(e){
        handleHttp(res, "ERROR_GET_NOT_FRIENDS")
    }
}

export{ getAllUsers, getUser, getUsers, getUserCount, getUsersProfile, getUserProfile, login,
    signup, updateUser, addFollow, deleteFollow, addChallenge, disableUser, deleteUser, unableUser,
    getFollowersCount, getNotFollowingCount, getFollowingCount, getFollowing, getNotFollowing, getFollowers };
