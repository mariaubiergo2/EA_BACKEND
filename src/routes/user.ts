import { Router } from "express";

import { getUsers, getUser, login, signup, updateUser, addFriend, deleteFriend, addChallenge, disableUser, deleteUser } from "../controllers/user";

const router = Router();

router.get("/all", getUsers); //Get all users
router.get("/:idUser", getUser); //Get only the information of one user

router.post("/login/:email/:password", login); //Lets a user to log in
router.post("/signup", signup); //Lets a user to register a new account
router.post("/update/:idUser", updateUser); //Lets a user to update his or her account details

router.post("/friend/add/:idUser/:usernameFriend", addFriend); //Add a user to your friends list
router.post("/friend/delete/:idUser/:usernameFriend", deleteFriend); //Remove a user from your friends list

router.post("/challenges/add/:idUser/:nameChallenge", addChallenge); //Adds a challenge to the list of completed challenges that a user has

router.delete("/disable/:idUser", disableUser); //Disable a user so that he or she is not visible
router.delete("/delete/:idUser", deleteUser); //Remove a user permanently

export { router };
