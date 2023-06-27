import "dotenv/config"; 
import {connect} from "mongoose"; //Connect function is from mongoose

// To connect to MongoDB
async function dbConnect(retryCount = 3): Promise<void> {
    const DB_URI = <string>process.env.DB_URI;
    let retry = 0;
  
    while (retry < retryCount) {
      try {
        await connect(DB_URI);
        console.log("Connected to MongoDB");
        return;
      } catch (error) {
        console.log(`Connection to MongoDB failed (Attempt ${retry + 1}): ${error}`);
        retry++;
      }
    }
  
    console.log(`Failed to connect to MongoDB after ${retryCount} attempts. Exiting...`);
    process.exit(1);
  }
  
  export default dbConnect;