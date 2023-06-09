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
function getTime(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
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
        }
        catch (error) {
            res.status(400).send({
                success: false,
                message: error,
            });
        }
    });
}
exports.default = { getTime };
//# sourceMappingURL=time.js.map