"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const time_1 = __importDefault(require("./controllers/time"));
const metrics_1 = __importDefault(require("./controllers/metrics"));
const authenticate_1 = __importDefault(require("./middleware/authenticate"));
function routes(app) {
    console.log("Routes");
    app.get("/", (req, res) => {
        res.status(200).json({ message: "Hello World!" });
    });
    app.get("/time", authenticate_1.default, time_1.default.getTime);
    app.get("/metrics", authenticate_1.default, metrics_1.default.getPrometheusMetrics);
}
exports.default = routes;
//# sourceMappingURL=routes.js.map