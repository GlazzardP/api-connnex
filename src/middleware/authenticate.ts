import { Request, Response, NextFunction } from "express";

const authenticeRequest = (req: Request, res: Response, next: NextFunction) => {
  console.log("Authenticate Middleware Run");

  const authToken = process.env.AUTHORIZATION_TOKEN;
  const reqToken = req.headers.authorization;

  if (authToken !== reqToken) {
    res.status(403).send({
      success: false,
      error: "Incorrect Auth Token",
    });
  } else {
    console.log("Next", req);

    return next();
  }
};

export default authenticeRequest;
