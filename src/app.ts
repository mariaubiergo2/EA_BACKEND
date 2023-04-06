import cors from "cors";
import express from "express";

import "dotenv/config";
import db from "./config/mongo";
import { router } from "./routes";

const PORT = process.env.PORT || 3001;  
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

db().then(() => console.log("Connection is ready..."));
app.listen(PORT, () => console.log(`Hey! Listening by the port ${PORT}.`));
