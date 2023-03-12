"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const time_1 = __importDefault(require("./controllers/time"));
const metrics_1 = __importDefault(require("./controllers/metrics"));
function routes(app) {
    console.log("Routes");
    app.get("/", (req, res) => {
        res.status(200).json({ message: "Hello World!" });
    });
    app.get("/time", time_1.default.getTime);
    app.get("/metrics", metrics_1.default.getPrometheusMetrics);
}
exports.default = routes;
//# sourceMappingURL=routes.js.map