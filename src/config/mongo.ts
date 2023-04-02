import "dotenv/config"; 
import {connect} from "mongoose"; //Connect function is from mongoose

// To connect to MongoDB
async function dbConnect(): Promise<void>{
    const DB_URI =<string>process.env.DB_URI; //We need to go to the .env file and create a variable called DB_URI
                                              //This variable refers to the string to connect to Mongo
    await connect(DB_URI);
}

//Connection exported ready to be used
export default dbConnect;