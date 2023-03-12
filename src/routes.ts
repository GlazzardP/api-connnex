import { Express, Request, Response } from "express";
import time from "./controllers/time";

function routes(app: Express) {
  console.log("Routes");
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "Hello World!" });
  });
  app.get("/time", time.getTime);
}

export default routes;
