import { Request, Response } from "express";
import { registerNewUser, tokenGoogle, tokenUser } from "../services/auth";
import { handleHttp } from "../utils/error.handle";

const registerCtrl = async ({ body }: Request, res: Response) => {
  try{
    const response = await registerNewUser(body);
    if (response===("ALREADY_USER")){
        res.status(220);
        res.send(response);
        console.log("Already User");
    }
    else {
        res.send(response);
    }        
}catch(e){
    handleHttp(res, "ERROR_SIGNUP");
    console.log("Error Signup");
}

};

const googleControl = async ({ body }: Request, res: Response) => {
  try{
    const response = await registerNewUser(body);
    if (response===("ALREADY_USER")){
      const { email, password } = body;
      const responseUser = await tokenGoogle({ email, password });
      res.status(200);
      res.send(responseUser);
      console.log("Google User already exists, ");
    }
    else {
        res.send(response);
    }        
}catch(e){
    handleHttp(res, "ERROR_GOGLE_SIGNUP");
    console.log("Error GOOGLE Signup");
}

};


// const loginCtrl = async ({ body }: Request, res: Response) => {
  
//   const { email, password } = body;
//   const responseUser = await loginUser({ email, password });

//   if (responseUser === "PASSWORD_INCORRECT") {
//     res.status(403);
//     res.send(responseUser);
//   } else {
//     res.send(responseUser);
//   }
// };

const tokenCtrl = async ({ body }: Request, res: Response) => {
  
  const { email, password } = body;
  const responseUser = await tokenUser({ email, password });
  console.log("Password del user: " + password);

  if (responseUser === "PASSWORD_INCORRECT") {
    res.status(222);
    console.log("Password Incorrect");
    res.send(responseUser);
  } else if (responseUser === "NOT_FOUND_USER") {
    res.status(221);
    console.log("Not Found User");
    res.send(responseUser);    
  } else if (responseUser === "NOT_ACTIVE_USER") {
    res.status(220);
    console.log("Not Active User");
    res.send(responseUser);
  } else {
    res.status(200);
    res.send(responseUser);
  }  
};

export { registerCtrl, tokenCtrl, googleControl };