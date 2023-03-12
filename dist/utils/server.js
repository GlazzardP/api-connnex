"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("../routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors = require("cors");
const NODE_CORS_ALLLOWED = process.env.NODE_CORS_ALLOWED;
const ARRAY_NODE_CORS_ALLOWED = NODE_CORS_ALLLOWED === null || NODE_CORS_ALLLOWED === void 0 ? void 0 : NODE_CORS_ALLLOWED.split(",");
const corsOptions = {
    origin: ARRAY_NODE_CORS_ALLOWED,
    optionsSuccessStatus: 200,
};
function createServer() {
    const app = (0, express_1.default)();
    app.use(cors(corsOptions));
    app.use(express_1.default.json());
    (0, routes_1.default)(app);
    return app;
}
exports.default = createServer;
//# sourceMappingURL=server.js.map