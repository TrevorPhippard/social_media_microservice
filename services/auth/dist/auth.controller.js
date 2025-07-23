"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_service_1 = require("./auth.service");
const router = express_1.default.Router();
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
      return res
        .status(400)
        .json({ error: "Email, username and password are required" });
    }
    const result = await (0, auth_service_1.registerUser)(
      email,
      username,
      password
    );
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message || "Registration failed" });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
    const result = await (0, auth_service_1.authenticateUser)(email, password);
    if (!result) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Authentication failed" });
  }
});
exports.default = router;
