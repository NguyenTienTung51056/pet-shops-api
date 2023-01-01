const Jwt = require("jsonwebtoken");
const { createError } =require("../error");

 const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return next(createError(401, "you are not authenticated!"));

    Jwt.verify(token, process.env.SECRET_JWT, (err, user) => {
        if (err) return next(createError(403, "Token is not valid!"));
        req.user = user;
        next();
    });
}


 const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.id === req.params.userId || req.user.isAdmin) {
        next();
      } else {
        return next(createError(403, "You are not alowed to do that!"));
      }
    });
  };


  const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user?.isAdmin) {
        next();
      } else {
        return next(createError(403, "You are not alowed to do that!"));
      }
    });
  };


module.exports = {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  };
  