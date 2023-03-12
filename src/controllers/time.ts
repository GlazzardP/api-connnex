import { Request, Response, NextFunction } from "express";

async function getTime(req: Request, res: Response, next: NextFunction) {
  try {
    const error = false;
    if (error) {
      return res.status(400).send({
        success: false,
        error: "No Auth Token",
      });
    }
    const epochSeconds = Date.now(); // Unix timestamp in milliseconds

    res.send({
      success: true,
      time: epochSeconds,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error,
    });
  }
}
export default { getTime };
