import { Express, Request, Response } from "express";
import time from "./controllers/time";
import metrics from "./controllers/metrics";
import authenticeRequest from "./middleware/authenticate";

function routes(app: Express) {
  console.log("Routes");
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "Hello World!" });
  });
  app.get("/time", authenticeRequest, time.getTime);
  app.get("/metrics", authenticeRequest, metrics.getPrometheusMetrics);
}

export default routes;
