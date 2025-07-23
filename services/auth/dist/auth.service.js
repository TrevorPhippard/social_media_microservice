"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = registerUser;
exports.authenticateUser = authenticateUser;
const prismaClient_1 = __importDefault(require("./prismaClient"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";
async function registerUser(email, username, password) {
    const existingUser = await prismaClient_1.default.user.findFirst({
        where: {
            OR: [{ email }, { username }],
        },
    });
    if (existingUser) {
        throw new Error("Email or username already in use.");
    }
    const hashedPassword = await bcrypt_1.default.hash(password, 10);
    const user = await prismaClient_1.default.user.create({
        data: {
            email,
            username,
            password: hashedPassword,
        },
    });
    const token = jsonwebtoken_1.default.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });
    return {
        token,
        user: {
            id: Number(user.id),
            email: user.email,
            username: user.username,
        },
    };
}
async function authenticateUser(email, password) {
    const user = await prismaClient_1.default.user.findUnique({
        where: { email },
    });
    if (!user)
        return null;
    const passwordMatch = await bcrypt_1.default.compare(password, user.password);
    if (!passwordMatch)
        return null;
    const token = jsonwebtoken_1.default.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });
    return {
        token,
        user: {
            id: Number(user.id),
            email: user.email,
            username: user.username,
        },
    };
}
process.on("SIGINT", async () => {
    await prismaClient_1.default.$disconnect();
    process.exit(0);
});
