/** Esta ruta nos va a devolver un array de objetos, que va a venir de una base de datos (carpeta config)*/

import { Request, Response, Router } from "express";
import { deletePerson, getUser, getUsers, postPerson, updatePerson } from "../controllers/user";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

router.get("/all", getUsers); 
router.get("/:idUser", getUser); 

router.post("/login/:email/:password", login);
router.post("/register", register); 
router.post("/update/:idUser", updateUser); 

router.post("/friend/add/:idUser/:usernameFriend", addFriend);
router.post("/friend/delete/:idUser/:usernameFriend", deleteFriend);

router.post("/challenges/add/:idUser/:nameChallenge", addChallenge);

router.delete("/disable/:idUser", disableUser);
router.delete("/delete/:idUser", deleteUser);

export {router};
