const accountSid = "ACb2906ab6f66192e9b68549417430c209";
const authToken = "a3b37e24edf5ecd9edd1c0f4a7d20899";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "This is the new messages.",
    from: "+12053524352",
    to: "+9779860999594"
  })
  .then(message => console.warn(message.sid))
  .catch(err => {
    console.warn(err);
  });
