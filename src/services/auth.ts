import { Auth } from './../interfaces/auth.interface';
import UserModel from "../models/user";
import { User } from "../interfaces/user.interface";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from '../utils/jwt.handle';

const registerNewUser = async ({ email, password, name, surname, role, exp, level, username}: User) => {
    const checkIs = await UserModel.findOne({ email });
    if (checkIs) return "ALREADY_USER";
    const passHash = await encrypt(password); 
    const registerNewUser = await UserModel.create({email, password: passHash, name, surname, role, exp, username, level});
    return registerNewUser;
  };

  const loginUser = async ({ email, password }: Auth) => {
    const checkIs = await UserModel.findOne({ email });
    if (!checkIs) return "NOT_FOUND_USER";
  
    const passwordHash = checkIs.password; 
    const isCorrect = await verified(password, passwordHash);
  
    if (!isCorrect) return "PASSWORD_INCORRECT";
  
    const token = generateToken(checkIs.email, checkIs.role);
    const data = {token, user: checkIs};
    return data;
  };

export {registerNewUser, loginUser};