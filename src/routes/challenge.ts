import { Router } from "express";

import { getAllChallenges, getChallenges, getChallenge, getChallengeCount, addChallenge, updateChallenge, acceptChallenge, disableChallenge, deleteChallenge } from "../controllers/challenge";  
import { checkJwt } from "../middleware/session";

const router = Router();

router.get("/get/all",checkJwt, getAllChallenges); //Get all challenges
router.get("/get/pagination/:pageNumber/:nPerPage",checkJwt, getChallenges); //Get some challenges
router.get("/get/:idChallenge",checkJwt, getChallenge); //Get only the information of one challenge

router.get("/count",checkJwt, getChallengeCount); //Return the total number of active challenges

router.post("/add",checkJwt, addChallenge); //Create a challenge

router.post("/update/:idChallenge",checkJwt, updateChallenge); //Update the details of a challenge

router.post("/accept/:idUser/:idChallenge",checkJwt, acceptChallenge); //Add a user to the challenge

router.post("/disable/:idChallenge",checkJwt, disableChallenge); //Disable a challenge so that it is not visible
router.delete("/delete/:idChallenge",checkJwt, deleteChallenge); //Remove a challenge permanently

export{ router };