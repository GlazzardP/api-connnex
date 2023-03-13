import { Request, Response, NextFunction } from "express";
import { validateTime } from "../utils/validate";

async function getTime(req: Request, res: Response, next: NextFunction) {
  try {
    console.log("Get Time Run", req.body);

    // const { error } = validateTime(req);

    // if (error) {
    //   return res.status(400).send({
    //     success: false,
    //     error: error.details,
    //   });
    // }
    const secondsSinceEpoch = Math.round(Date.now() / 1000);

    res.send({
      success: true,
      time: secondsSinceEpoch,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error,
    });
  }
}
export default { getTime };
