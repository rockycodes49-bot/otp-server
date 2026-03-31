const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let otpStore = {};

/* SEND OTP (demo for now) */
app.post("/send-otp", (req, res) => {
    const { phone } = req.body;

    const otp = Math.floor(1000 + Math.random() * 9000);
    otpStore[phone] = otp;

    console.log("OTP:", otp); // shows in logs

    res.json({ success: true });
});

/* VERIFY OTP */
app.post("/verify-otp", (req, res) => {
    const { phone, otp } = req.body;

    if (otpStore[phone] == otp) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(3000, () => console.log("Server running"));
