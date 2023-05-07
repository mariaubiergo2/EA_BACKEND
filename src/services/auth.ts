import { Auth } from './../interfaces/auth.interface';
import UserModel from "../models/user";
import { User } from "../interfaces/user.interface";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken, generateTokenCompleted } from '../utils/jwt.handle';

const registerNewUser = async ({ name, surname, username, email, password, role, exp, level}: User) => {
    const checkIs = await UserModel.findOne({ email });
    if (checkIs) return "ALREADY_USER";
    exp = 0;
    level = 1;
    if (role==null)
      role= "user";
    const active = true;
    const registerNewUser = await UserModel.create({email, password, name, surname, role, exp, username, level, active});
    return registerNewUser;
  };

  // const loginUser = async ({ email, password }: Auth) => {
  //   const checkIs = await UserModel.findOne({ email });
  //   if (!checkIs) return "NOT_FOUND_USER";
  
  //   const passwordHash = checkIs.password; 
  //   const isCorrect = await verified(password, passwordHash);
  
  //   if (!isCorrect) return "PASSWORD_INCORRECT";
  
  //   const token = generateToken(checkIs.email, checkIs.role);
  //   const data = {token, user: checkIs};
  //   return data;
  // };

  const tokenUser = async ({ email, password }: Auth) => {
    const checkIs = await UserModel.findOne({ email });
    if (!checkIs) return "NOT_FOUND_USER";

    if (!checkIs.active) return "NOT_ACTIVE_USER";
  
    const passwordHash = checkIs.password; 
    const isCorrect = await verified(password, passwordHash);
    if (!isCorrect) return "PASSWORD_INCORRECT";

    //const token = generateToken(checkIs.email, checkIs.role);
    const token = generateTokenCompleted(checkIs.id, checkIs.name, checkIs.surname, checkIs.username);
    const data = {token};
    return data;
  };

export {registerNewUser, tokenUser};