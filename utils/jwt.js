const jwt = require("jsonwebtoken");
const secrect = "chenwang";
const cookieKey = "token";
exports.publish = function (res, maxAge = 3600 * 24 * 1000, info = {}) {
  const token = jwt.sign(info, secrect, {
    expiresIn: maxAge,
  });
  res.cookie(cookieKey, token, {
    maxAge: maxAge,
    path: "/",
  });
  res.header("authorization", token);
};
exports.verify = function (req) {
  let token;
  token = req.cookie.token;
  if (!token) {
    token = req.headers.authorization;
    if (!token) {
      return null;
    }
    const parts = token.split(" ")[1];
    token = token.length === 1 ? token[0] : token[1];
  }

  try {
    const result = jwt.verify(token, secrect);
    return null;
  } catch {
    return null;
  }
};
