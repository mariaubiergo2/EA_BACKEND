import { Types } from "mongoose";

import { Itinerario } from "../interfaces/itinerario.interface";
import ItinerarioModel from "../models/itinerario";

export const get_AllItinerarios = async() => {
    const responseItem = await ItinerarioModel.find({}).populate({path: "challenges", select: "name descr exp"});
    return responseItem;
};

export const add_Itinerario = async (item: Itinerario) => {
    const chall = await ItinerarioModel.findOne({name: item.name});
    if (chall!=null)
        return "ALREADY_USED_NAME";
    const responseInsert = await ItinerarioModel.create(item);
    return responseInsert;
};