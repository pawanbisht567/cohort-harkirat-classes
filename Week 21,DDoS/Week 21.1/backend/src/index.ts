import express, { Request, Response } from 'express';
import { rateLimit } from 'express-rate-limit'
import axios from 'axios';

const app = express();
const PORT = 3000;

app.use(express.json());

// Store OTPs in a simple in-memory object
const otpStore: Record<string, string> = {};

const generateOTPGenerateOTP = rateLimit({
	windowMs: 1 * 60 * 1000, // 15 minutes
	limit: 1, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  message: 'Too many generate OTP Requests',
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})
const resetPasswordlimiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 5 minutes
	limit: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  message: 'Too many Reset Password Requests',
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

// Endpoint to generate and log OTP
app.post('/generate-otp', generateOTPGenerateOTP, (req: Request, res: Response): void => {
  const email = req.body.email;
  if (!email) {
      res.status(400).json({ message: "Email is required" });
      return
  }
  const otp = Math.floor(1000 + Math.random() * 9000).toString(); // generates a 6-digit OTP
  otpStore[email] = otp;

  console.log(`OTP for ${email}: ${otp}`); // Log the OTP to the console
  res.status(200).json({ message: "OTP generated and logged", otp: otp });
});

// Endpoint to reset password
app.post('/reset-password', resetPasswordlimiter, (req: Request, res: Response): void => {
  const { email, otp, newPassword } = req.body;
  if (!email || !otp || !newPassword) {
    res.status(400).json({ message: "Email, OTP, and new password are required" });
    return;
  }
  if (otpStore[email] === otp) {
    console.log(`Password for ${email} has been reset to: ${newPassword}`);
    delete otpStore[email]; // Clear the OTP after use
    res.status(200).json({ message: "Password has been reset successfully"});
  } else {
    console.log(`Invalid OTP for ${email}: ${otp}`);
    res.status(401).json({ message: "Invalid OTP" });
  }
});

// Malicious user, attacker route
app.post('/attack', async(req: Request, res: Response): Promise<void> => {
  const { email, otp, newPassword } = req.body;
   
  for(let i = 1000; i < 9999; i++) {
    console.log(`Trying OTP: ${i}`);
    try{
        let resetPassword = await axios.post('http://localhost:3000/reset-password', {
        email,
        otp: i.toString(),
        newPassword
        }) 
        if(resetPassword.status === 429) {
          console.log('Too many request by attacker')
        }
        if (resetPassword.status === 200) {
           res.status(200).json({ message: "Password reset successfully" });
           return;
        } else {
          console.log(`Unexpected status code: ${resetPassword.status}`);
        }
    } catch (error: Error | any) {

        if (error.response && error.response.status === 401) {
            console.log(`Invalid OTP: ${i}`);
        } else {
            console.log(`Error occurred: ${error.message}`);
            if(error.response.status === 429) {
              res.status(429).json({ msg: error.response.data})
              break;
            }
        }
    }
    
  }
  // res.status(200).json({ message: "Attack completed" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});