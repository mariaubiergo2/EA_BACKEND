import { Request, Response } from "express";
import { registerNewUser, loginUser, tokenUser } from "../services/auth";
import { handleHttp } from "../utils/error.handle";

const registerCtrl = async ({ body }: Request, res: Response) => {
  try{
    const response = await registerNewUser(body);
    if (response===("ALREADY_USER")){
        res.status(400);
        res.send(response)
    }
    else {
        res.send(response);
    }        
}catch(e){
    handleHttp(res, "ERROR_SIGNUP");
}

};

const loginCtrl = async ({ body }: Request, res: Response) => {
  
  const { email, password } = body;
  const responseUser = await loginUser({ email, password });

  if (responseUser === "PASSWORD_INCORRECT") {
    res.status(403);
    res.send(responseUser);
  } else {
    res.send(responseUser);
  }
  
};

const tokenCtrl = async ({ body }: Request, res: Response) => {
  
  const { email, password } = body;
  const responseUser = await tokenUser({ email, password });

  if (responseUser === "PASSWORD_INCORRECT") {
    res.status(403);
    res.send(responseUser);
  } else if (responseUser === "NOT_FOUND_USER") {
    res.status(403);
    res.send(responseUser);    
  } else {
    res.status(200);
    res.send(responseUser);
  }
  
};

export { loginCtrl, registerCtrl, tokenCtrl };