require("dotenv").config();

const credentials = {
  apiKey: process.env.API_KEY,
  username: "sandbox",
};

console.log(process.env.USERNAME);
console.log(process.env.API_KEY);

const africasTalking = require("africastalking")(credentials);

// Initialize a service e.g. SMS
const sms = africasTalking.SMS;

// Use the service
const options = {
  to: ["+254726158347", "+254716293710"],
  message: "Hello this is dummy message",
};

// Send message and capture the response or error
sms
  .send(options)
  .then((response) => {
    console.log(response.SMSMessageData.Recipients[0]);
  })
  .catch((error) => {
    console.log(error);
  });
