import { Router } from "express";

import { addItinerario, getAllItinerarios } from "../controllers/itinerario";  
import { checkJwt } from "../middleware/session";

const router = Router();

router.get("/get/all",checkJwt, getAllItinerarios); //Get all challenges

router.post("/add",checkJwt, addItinerario); //Create a challenge

export{ router };