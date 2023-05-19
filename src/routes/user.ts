import { Router } from "express";
import { checkJwt,checkAdmin } from "../middleware/session";
import {registerCtrl, tokenCtrl} from "../controllers/auth"

import { getAllUsers, getUsers, getUser, getUserCount, getUsersProfile, getUserProfile, login, signup, updateUser, addFollow, deleteFollow, addChallenge, disableUser, deleteUser, unableUser } from "../controllers/user";

const router = Router();

//router.get("/get/all", checkAdmin, getAllUsers); //Get all users
//router.get("/get/:idUser", checkAdmin, getUser); //Get only the information of one user

router.get("/get/all", checkJwt, getAllUsers); //Get all users
router.get("/get/pagination/:pageNumber/:nPerPage", checkJwt,getUsers); //Get some users
router.get("/get/:idUser",checkJwt, getUser); //Get only the information of one user

router.get("/count",checkJwt, getUserCount); //Return the total number of active users

router.get("/profile/all/:pageNumber/:nPerPage",checkJwt, getUsersProfile); //Get all users information profile
router.get("/profile/:idUser",checkJwt, getUserProfile); //Get only the information of one user profile

// router.get("/login/:email/:password", login); //Lets a user to log in
// router.post("/signup", signup); //Lets a user to register a new account
// router.post("/login2", loginCtrl);
router.post("/token",checkJwt, tokenCtrl); //PER FER EL LOGIN

router.post("/update/:idUser",checkJwt, updateUser); //Lets a user to update his or her account details

router.post("/follow/add/:idUser/:idFollowed",checkJwt, addFollow); //Add a user to your following list
router.post("/follow/delete/:idUser/:idFollowed",checkJwt, deleteFollow); //Remove a user from your following list

router.post("/challenges/add/:idUser/:idChallenge",checkJwt, addChallenge); //Adds a challenge to the list of completed challenges that a user has

router.post("/disable/:idUser", checkJwt,disableUser); //Disable a user so that he or she is not visible

router.post("/unable/:idUser", checkJwt,unableUser); //Disable a user so that he or she is not visible
//router.delete("/delete/:idUser", checkAdmin, deleteUser); //Remove a user permanently

router.delete("/delete/:idUser",checkJwt, deleteUser); //Remove a user permanently

//router.delete("/delete/:idUser", checkAdmin, deleteUser); //Remove a user permanently

export { router };
