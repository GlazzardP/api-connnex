import { Express, Request, Response } from "express";

function routes(app: Express) {
  console.log("Routes");
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "Hello World!" });
  });
}

export default routes;
