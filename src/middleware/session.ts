import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext";
import { verifyToken } from "../utils/jwt.handle";
import UserModel from "../models/user";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop(); // 11111
    const isUser = verifyToken(`${jwt}`) as { email: string };
    if (!isUser) {
      res.status(401);
      res.send("NO_TIENES_UN_JWT_VALIDO");
    } else {
      req.user = isUser;
      next();
    }
  } catch (e) {
    console.log({ e });
    res.status(400);
    res.send("SESSION_NO_VALIDA");
  }
};
//Aun no tira 👉👈
// const isOwner (req:RequestExt, res:Response, next:NextFunction){
//   try {
//     const jwtByUser = req.headers.authorization || "";
//     const jwt = jwtByUser.split(" ").pop(); // 11111
//     const isUser = verifyToken(`${jwt}`) as { email: string }; //Recuperamos el mail
//     if (!isUser) {
//       res.status(401);
//       res.send("NO_TIENES_UN_JWT_VALIDO");
//     } else {
//       const user = UserModel.find({email:isUser.email})
//       next();
//     }
//   } catch (e) {
//     console.log(e);
//     res.status(400).send("Error")
//   }
// }

//Miramos el rol que llega pro el JWT y verificamos que sea "admin"

const checkAdmin = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || ""; //Nos llega o un JWT o nada (string vacia)
    const jwt = jwtByUser.split(" ").pop(); // "Bearer token"-> Nos quedamos con la ultima parte
    const isUser = verifyToken(`${jwt}`) as { email: string, role: string };
    if (!isUser) {
      res.status(401);
      res.send("NO_TIENES_UN_JWT_VALIDO");
    } 
    if (isUser.role != "admin"){
      res.status(401);
      res.send("UNAUTHORIZED");
    } 
    else {
      req.user = isUser;
      next();
    }
  } catch (e) {
    console.log({ e });
    res.status(400);
    res.send("SESSION_NO_VALIDA");
  }
};

export { checkJwt, checkAdmin };