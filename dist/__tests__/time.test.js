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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../utils/server"));
const app = (0, server_1.default)();
(0, node_test_1.describe)("GET TIME"),
    () => {
        (0, node_test_1.describe)("Incorrect Token", () => {
            (0, node_test_1.it)("Should return http 403", () => __awaiter(void 0, void 0, void 0, function* () {
                yield (0, supertest_1.default)(app).get("/time").expect(403);
            }));
        });
    };
(0, node_test_1.describe)("GET METRICS"),
    () => {
        (0, node_test_1.describe)("Incorrect Token", () => {
            (0, node_test_1.it)("Should return http 403", () => __awaiter(void 0, void 0, void 0, function* () {
                yield (0, supertest_1.default)(app).get("/metrics").expect(403);
            }));
        });
    };
//# sourceMappingURL=time.test.js.map