import { Router } from "express";
import { readdirSync } from "fs";

// The route to the actual directory
const PATH_ROUTER = `${__dirname}`;

const router = Router();

// Get the file names in routes dir without the extension (eg. user.ts > user)
const cleanFileName = (fileName:string) => {
    const file = fileName.split('.').shift(); //Lo que hacemos es quitarle el .ts a los archivos para que nos devuelva solo el nombre
    return file;
}

//Scan how many files are in a directory, so if I have to import all the files in a folder, I only have to import this folder.
readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if(cleanName !== "index"){
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`Loading... /${cleanName}`);
            router.use(`/${cleanName}`, moduleRouter.router)
        })
    }    
})

export{ router }
