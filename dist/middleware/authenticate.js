"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authenticeRequest = (req, res, next) => {
    console.log("Authenticate Middleware Run");
    const authToken = process.env.AUTHORIZATION_TOKEN;
    const reqToken = req.headers.authorization;
    if (authToken !== reqToken) {
        res.status(403).send({
            success: false,
            error: "Incorrect Auth Token",
        });
    }
    else {
        console.log("Next", req);
        return next();
    }
};
exports.default = authenticeRequest;
//# sourceMappingURL=authenticate.js.map