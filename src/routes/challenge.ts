import { Router } from "express";

import { getChallenges, getChallenge, getChallengeCount, addChallenge, updateChallenge, acceptChallenge, disableChallenge, deleteChallenge } from "../controllers/challenge";  

const router = Router();

router.get("/get/all", getChallenges); //Get all challenges
router.get("/get/:idChallenge", getChallenge); //Get only the information of one challenge

router.get("/count", getChallengeCount); //Return the total number of active challenges

router.post("/add", addChallenge); //Create a challenge

router.post("/update/:idChallenge", updateChallenge); //Update the details of a challenge

router.post("/accept/:idUser/:idChallenge", acceptChallenge); //Add a user to the challenge

router.post("/disable/:idChallenge", disableChallenge); //Disable a challenge so that it is not visible
router.delete("/delete/:idChallenge", deleteChallenge); //Remove a challenge permanently

export{ router };