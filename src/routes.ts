import { Express, Request, Response } from "express";
import time from "./controllers/time";
import metrics from "./controllers/metrics";

function routes(app: Express) {
  console.log("Routes");
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "Hello World!" });
  });
  app.get("/time", time.getTime);
  app.get("/metrics", metrics.getPrometheusMetrics);
}

export default routes;
