import { Request, Response, NextFunction } from "express";

async function getPrometheusMetrics(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log("Metrics Run");

    const error = false;
    if (error) {
      return res.status(400).send({
        success: false,
        error: "No Auth Token",
      });
    }
    const metrics = {};

    res.send({
      success: true,
      metrics: metrics,
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
