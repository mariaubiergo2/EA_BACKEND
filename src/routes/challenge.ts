import { Router } from "express";
import { delete_Challenge, get_Challenge, get_Challenges, accept_Challenge, post_Challenge, update_Challenge } from "../controllers/challenge";  

const router=Router();

router.get("/all", getChallenges); //Get all challenges
router.get("/:idChallenge", getChallenge); //Get only the information of one challenge

router.post("/add", postChallenge); //Create a challenge
router.put("/update/:idChallenge", updateChallenge); //Update the details of a challenge

router.post("/accept/:idChallenge", acceptChallenge); //Add a user to the challenge

router.delete("/disable/:idChallenge", disableChallenge); //Disable a challenge so that it is not visible
router.delete("/delete/:idChallenge", deleteChallenge); //Remove a challenge permanently

export{router};