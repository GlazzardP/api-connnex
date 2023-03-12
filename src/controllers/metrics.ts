import { Request, Response, NextFunction } from "express";
import { prometheusMetrics } from "../utils/metrics";

async function getPrometheusMetrics(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log("Metrics Run");

    const metrics = await prometheusMetrics().catch((err) => {
      console.log({ err });
      throw "Cannot Get Prometheus Metrics";
    });

    const error = false;
    if (error) {
      return res.status(400).send({
        success: false,
        error: "No Auth Token",
      });
    }

    res.send({
      success: true,
      metrics,
    });
  } catch (error) {
    console.log({ error });

    res.status(400).send({
      success: false,
      message: error,
    });
  }
}
export default { getPrometheusMetrics };
