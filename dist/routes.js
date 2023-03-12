"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function routes(app) {
    console.log("Routes");
    app.get("/", (req, res) => {
        res.status(200).json({ message: "Hello World!" });
    });
}
exports.default = routes;
//# sourceMappingURL=routes.js.map