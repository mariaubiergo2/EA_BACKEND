//In charge to connect with the dB
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";

const insert_User = async(item: User) => {
    const responseInsert = await UserModel.create(item);
    return responseInsert;
};

const get_Users = async() => {
    const responseItem = await UserModel.find({});
    return responseItem;
};

const get_User = async(id: string) => {
    const responseItem = await UserModel.findOne({_id: id});
    return responseItem;
};

const update_User = async(id: string, data: User) => {
    const responseItem = await UserModel.findOneAndUpdate({_id: id}, data,{new: true});
    return responseItem;
};

const delete_User = async(id: string) => {
    const responseItem = await UserModel.findOneAndRemove({_id: id});
    return responseItem;
}

const disable_User = async(id: string) => {
    const responseItem = await UserModel.findOneAndRemove({_id: id});
    return responseItem;
}

const add_Challenge = async(id: string) => {
    const responseItem = await UserModel.findOneAndRemove({_id: id});
    return responseItem;
}

const sign_up = async(id: string) => {
    const responseItem = await UserModel.findOneAndRemove({_id: id});
    return responseItem;
}

const add_Friend = async(id: string) => {
    const responseItem = await UserModel.findOneAndRemove({_id: id});
    return responseItem;
}

const delete_Friend = async(id: string) => {
    const responseItem = await UserModel.findOneAndRemove({_id: id});
    return responseItem;
}

const log_in = async(id: string) => {
    const responseItem = await UserModel.findOneAndRemove({_id: id});
    return responseItem;
}

export {delete_User, disable_User, add_Challenge, delete_Friend, add_Friend, update_User, sign_up, log_in, get_User, get_Users};
