import { Request, Response, NextFunction } from "express";
import { prometheusMetrics } from "../utils/metrics";

async function getPrometheusMetrics(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const metrics = await prometheusMetrics().catch((err) => {
      console.log({ err });
      throw "Cannot Get Prometheus Metrics";
    });

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
