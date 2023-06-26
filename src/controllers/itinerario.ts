import { Request, Response } from "express";

import { handleHttp } from "../utils/error.handle";
import { get_AllItinerarios, add_Itinerario } from "../services/itinerario"; 

export const getAllItinerarios = async (req:Request, res:Response) => {
    try{
        const response = await get_AllItinerarios();
        res.send(response);
    } catch(e){
        handleHttp(res, "ERROR_GET_ALL_CHALLENGES");
    }
};

export const addItinerario = async ({body}:Request, res:Response) => {
    try{
        const response = await add_Itinerario(body);
        if (response===("ALREADY_USED_NAME")){
            res.status(400);
            res.send(response);
        }
        else {
            res.send(response);
        }
    }catch(e){
        handleHttp(res,"ERROR_POST_ITINERARIO");
    }
};
