import express from "express";
import routes from "./routes";
import dotenv from "dotenv";

dotenv.config();

const cors = require("cors");

const NODE_CORS_ALLLOWED = process.env.NODE_CORS_ALLOWED;
const ARRAY_NODE_CORS_ALLOWED = NODE_CORS_ALLLOWED?.split(",");

const corsOptions = {
  origin: ARRAY_NODE_CORS_ALLOWED,
  optionsSuccessStatus: 200,
};

function createServer() {
  const app = express();
  app.use(cors(corsOptions));
  app.use(express.json());

  routes(app);
  return app;
}

export default createServer;
