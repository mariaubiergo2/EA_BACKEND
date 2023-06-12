import cors from "cors";
import config from "config";
import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";

import "dotenv/config";
import socket from "./socket";
import db from "./config/mongo";
import { router } from "./routes";
import { version } from "../package.json";

const PORT = process.env.PORT || 3001;  
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

db().then(() => console.log("Connection is ready..."));
app.listen(PORT, () => console.log(`Hey! Listening by the port ${PORT}.`));

const port = config.get<number>("port");
const host = config.get<string>("host");
const corsOrigin = "*"

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: corsOrigin,
    credentials: true,
  },
});

app.get("/", (_, res) =>
  res.send(`Server is up and running version ${version}`)
);

httpServer.listen(port, host, () => {
  console.log("Server version ${version} is listening 🚀");
  console.log(`http://${host}:${port}`);

  socket({ io });
});