const accountSid = 'AC71d858b638017f8420dafeb72bf89a57'; // Your Account SID from www.twilio.com/console
const authToken = '64ed3778d592fcc10d1613b66af6da9f'; // Your Auth Token from www.twilio.com/console
console.log("hello")

const twilio = require('twilio');
console.log("hello2")


const client = new twilio(accountSid, authToken);
console.log("hello3")


client.messages
  .create({
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    from: '+12568183515',
    to: '+14372344268'
  })
  .then((message) => console.log(message.sid));
  console.log("hello4")