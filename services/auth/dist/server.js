"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
// import client from "prom-client";
const auth_controller_1 = __importDefault(require("./auth.controller"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "http://localhost:5173", // frontend origin
    credentials: true,
}));
app.use(body_parser_1.default.json());
app.use("/api/auth", auth_controller_1.default);
// client.collectDefaultMetrics();
// app.get("/metrics", async (_req, res) => {
//   res.set("Content-Type", client.register.contentType);
//   res.end(await client.register.metrics());
// });
const PORT = parseInt(process.env.PORT || "4003", 10);
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Profile service listening on port ${PORT}`);
});
