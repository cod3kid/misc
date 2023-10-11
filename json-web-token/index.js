const crypto = require("crypto");

const header = {
  alg: "HS256",
  typ: "JWT",
};

const payload = {
  name: "Muhamed Sufail",
  email: "sufail@mailinator.com",
};

const tokenSecret = "dummyTokenSecret";

const encodedHeader = Buffer.from(JSON.stringify(header)).toString("base64");
const encodedPayload = Buffer.from(JSON.stringify(payload)).toString("base64");

const signatureInput = encodedHeader + "." + encodedPayload;
const signature = crypto
  .createHmac("sha256", tokenSecret)
  .update(signatureInput)
  .digest("base64");

const jsonWebToken = encodedHeader + "." + encodedPayload + "." + signature;
console.log(jsonWebToken);
