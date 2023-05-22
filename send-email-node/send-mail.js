// javascript
function generateOTP() {
  // Declare a digits variable
  // which stores all digits
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

let mailOtp = generateOTP();

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);
const msg = {
  to: "kyadav5213@gmail.com", // Change to your recipient
  from: "kartik@techhelps.co.in", // Change to your verified sender
  subject: "Verifying Otp",
  text: "and easy to do anywhere, even with Node.js",
  html: `<strong>Verification of the OTP</strong><h1> your otp is ${mailOtp} </h1>`,
};
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
