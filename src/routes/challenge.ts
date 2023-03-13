import { Request, Response, Router } from "express";
import { delete_Challenge, get_Challenge, get_Challenges, accept_Challenge, post_Challenge, update_Challenge } from "../controllers/challenge";  

const router=Router();

//A partir del seminari 7 de JWT estaria be implementar seguretat (aqui i resta de rutes)
router.get("/all", get_Challenges);
router.get("/:idChallenge", get_Challenge);
router.post("/", post_Challenge);
router.put("/:idChallenge",update_Challenge);
router.delete("/:idChallenge",delete_Challenge);
router.post("/accept",accept_Challenge);

export{router};