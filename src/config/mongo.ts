import "dotenv/config"; //Implements variables de entorno
import {connect} from "mongoose"; //connect function is from mongoose

// To connect to MongoDB
async function dbConnect(): Promise<void>{
    const DB_URI=<string>process.env.DB_URI; //Necesitamos una variable nueva que se llama DB_URI.
                                             //Esta variable hace referencia a lo que es el string para conectarnos al Mongo.
                                             //Tenemos que ir al archivo .env y crear la misma variable
    await connect(DB_URI);
}

//Connection exported ready to be used
export default dbConnect;

//mongoose funciona a traves de esquemas. Un es una representacion de los datos que se van almacenar en la BBDD