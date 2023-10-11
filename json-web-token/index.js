const crypto = require("crypto");
const TOKEN_SECRET = "dummyTokenSecret";
const header = {
  alg: "HS256",
  typ: "JWT",
};

const createJWT = (payload) => {
  const encodedHeader = Buffer.from(JSON.stringify(header)).toString("base64");
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString(
    "base64"
  );

  const signatureInput = encodedHeader + "." + encodedPayload;
  const signature = crypto
    .createHmac("sha256", TOKEN_SECRET)
    .update(signatureInput)
    .digest("base64");

  return encodedHeader + "." + encodedPayload + "." + signature;
};

const verifyJWT = (jwt) => {
  const currentPayload = jwt.split(".")[1];
  const payloadAsJSON = JSON.parse(
    Buffer.from(currentPayload, "base64").toString("utf-8")
  );

  const newJWT = createJWT(payloadAsJSON);

  return newJWT === jwt;
};

const p1 = {
  name: "Muhamed Sufail",
  email: "sufail@mailinator.com",
};

const jwtForP1 = createJWT(p1);

console.log(jwtForP1);
const tamperedToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTXVoYW1lZCBTdWZhaWwiLCJlbWFpbCI6ImFobWVkQG1haWxpbmF0b3IuY29tIn0.MqZ8ao19KbRygaqcYwBNW_PV71HFUEq8vYdZ5_bkO4M";

console.log("JWT passed is valid? ", verifyJWT(jwtForP1));
console.log("JWT passed is valid? ", verifyJWT(tamperedToken));
// Note: We might need to strip = and + in the final token
