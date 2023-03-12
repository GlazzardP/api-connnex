"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const metrics_1 = require("../utils/metrics");
function getPrometheusMetrics(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Metrics Run");
            const metrics = yield (0, metrics_1.prometheusMetrics)().catch((err) => {
                console.log({ err });
                throw "Cannot Get Prometheus Metrics";
            });
            const error = false;
            if (error) {
                return res.status(400).send({
                    success: false,
                    error: "No Auth Token",
                });
            }
            res.send({
                success: true,
                metrics,
            });
        }
        catch (error) {
            console.log({ error });
            res.status(400).send({
                success: false,
                message: error,
            });
        }
    });
}
exports.default = { getPrometheusMetrics };
//# sourceMappingURL=metrics.js.map