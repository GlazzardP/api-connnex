import { Request, Response, NextFunction } from "express";

async function getTime(req: Request, res: Response, next: NextFunction) {
  try {
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
