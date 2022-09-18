const phoneBook = ["+14379968383", "+16046526266", "+14372344268"];
const myMessage = "hi where is olivia";

const accountSid = "AC71d858b638017f8420dafeb72bf89a57"; // Your Account SID from www.twilio.com/console
const authToken = "fc00c39db00cf335cfe3ec75bf1a3177"; // Your Auth Token from www.twilio.com/console

const twilio = require("twilio");

const client = new twilio(accountSid, authToken);

phoneBook.forEach(sendMessage);

function sendMessage(number) {
  console.log(number);
  client.messages
    .create({
      body: myMessage,
      from: "+12568183515",
      to: number,
    })
    .then((message) => console.log(message.sid));
}
