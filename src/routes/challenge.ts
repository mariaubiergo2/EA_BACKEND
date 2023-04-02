import { Router } from "express";

import { getChallenges, getChallenge, addChallenge, updateChallenge, acceptChallenge, disableChallenge, deleteChallenge } from "../controllers/challenge";  

const router = Router();

router.get("/all", getChallenges); //Get all challenges
router.get("/:idChallenge", getChallenge); //Get only the information of one challenge

router.post("/add", addChallenge); //Create a challenge
router.put("/update/:idChallenge", updateChallenge); //Update the details of a challenge

router.post("/accept/:idUser/:idChallenge", acceptChallenge); //Add a user to the challenge

router.delete("/disable/:idChallenge", disableChallenge); //Disable a challenge so that it is not visible
router.delete("/delete/:idChallenge", deleteChallenge); //Remove a challenge permanently

export{ router };