import { Router } from "express";
import { checkAdmin } from "../middleware/session";
import { getAllUsers, getUsers, getUser, getUserCount, getUsersProfile, getUserProfile, login, signup, updateUser, addFollow, deleteFollow, addChallenge, disableUser, deleteUser } from "../controllers/user";
import { loginCtrl, tokenCtrl } from "../controllers/auth";

const router = Router();

//router.get("/get/all", checkAdmin, getAllUsers); //Get all users
//router.get("/get/:idUser", checkAdmin, getUser); //Get only the information of one user

router.get("/get/all", getAllUsers); //Get all users
router.get("/get/pagination/:pageNumber/:nPerPage", getUsers); //Get some users
router.get("/get/:idUser", getUser); //Get only the information of one user

router.get("/count", getUserCount); //Return the total number of active users

router.get("/profile/all/:pageNumber/:nPerPage", getUsersProfile); //Get all users information profile
router.get("/profile/:idUser", getUserProfile); //Get only the information of one user profile

router.get("/login/:email/:password", login); //Lets a user to log in
router.post("/signup", signup); //Lets a user to register a new account
router.post("/login2", loginCtrl);
router.post("/token", tokenCtrl);

router.post("/update/:idUser", updateUser); //Lets a user to update his or her account details

router.post("/follow/add/:idUser/:idFollowed", addFollow); //Add a user to your following list
router.post("/follow/delete/:idUser/:idFollowed", deleteFollow); //Remove a user from your following list

router.post("/challenges/add/:idUser/:idChallenge", addChallenge); //Adds a challenge to the list of completed challenges that a user has

router.post("/disable/:idUser", disableUser); //Disable a user so that he or she is not visible
router.delete("/delete/:idUser", deleteUser); //Remove a user permanently

//router.delete("/delete/:idUser", checkAdmin, deleteUser); //Remove a user permanently

export { router };
