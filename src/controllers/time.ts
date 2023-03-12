import { Request, Response, NextFunction } from "express";
import { validateTime } from "../utils/validate";

async function getTime(req: Request, res: Response, next: NextFunction) {
  try {
    const { error } = validateTime(req.body);
    console.log({ error });

    if (error) {
      return res.status(400).send({
        success: false,
        error: error.details,
      });
    }
    const time = Date.now(); // Unix timestamp in milliseconds

    res.send({
      success: true,
      time,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error,
    });
  }
}
export default { getTime };
