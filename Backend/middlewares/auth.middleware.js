const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
const blackListTokenModel = require(path.join(
  __dirname,
  "../models/blacklistToken.model"
));
//const captainModel = require("../models/captain.model");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const isBlacklisted = await blackListTokenModel.findOne({ token: token });

  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);

    req.user = user;

    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

// module.exports.authCaptain = async (req, res, next) => {
//   const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }

//   const isBlacklisted = await blackListTokenModel.findOne({ token: token });

//   if (isBlacklisted) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const captain = await captainModel.findById(decoded._id);
//     req.captain = captain;

//     return next();
//   } catch (err) {
//     console.log(err);

//     res.status(401).json({ message: "Unauthorized" });
//   }
// };

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     //this will return the id of the user from the token because while creating the token we passed the id of the user as payload
//     //and the secret key is used to sign the token
//     const user = await userModel.findById(decoded.id);

//     req.user = user;

//     return next();
//   }catch (err) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }
// };
