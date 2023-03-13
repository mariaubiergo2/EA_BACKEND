import {Router} from "express";
import {readdirSync} from "fs";

// The route to the actual directory
const PATH_ROUTER = `${__dirname}`;

const router = Router();

// Get the file names in routes dir without the extension (eg. user.ts > user)
const cleanFileName = (fileName:string) => {
    const file = fileName.split('.').shift(); //Lo que hacemos es quitarle el .ts a los archivos para que nos devuelva solo el nombre
    return file;
}

/**Escaneo cuántos archivos hay en un directorio, porqué así si tengo que importar todos los archivos de una
 * carpeta solo tendré que emportar esta carpeta.
 */
readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if(cleanName !== "index"){

        //router.use(`/${cleanName}`) //Le decimos al router la nueva ruta
        /**
         * para poder hacer esto necesitamos hacer una importación dinámica, es decir, necesitamos importar
         * los datos de la ruta, esto lo haremos con el import de encima.
         */

        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`Se está cargando la ruta ..... /${cleanName}`);
            router.use(`/${cleanName}`, moduleRouter.router)
        })

        
    }    
})

export{router}
