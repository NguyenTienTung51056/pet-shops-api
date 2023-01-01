const User = require('../models/UserDetails.js');
const bcrypt = require('bcryptjs');
const { createError } = require('../error.js');
const jwt  = require('jsonwebtoken');



//@desc     Register user
const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({ ...req.body, password: hash });
        const user = await newUser.save();
        res.status(200).json("user created");
    } catch (error) {
        next(error);
    }
}



//@desc     Login user
 const signin = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return next(createError(404, "user not found!"));

        const isCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isCorrect) return next(createError(401, "password incorrect!"));

        const token = jwt.sign({ id: user._id,isAdmin:user.isAdmin }, process.env.SECRET_JWT);
        const {password,...others} =  user._doc;

        res.cookie("access_token", token, { httpOnly: true, maxAge: 1000*60*60*24*365*7,sameSite: 'none', secure: true }).status(200).json(others);
    } catch (error) {
        next(error);
    }
}  


//@desc     Logout user
const logout = async (req, res, next) => {
    try {
        res.clearCookie("access_token",{ httpOnly: true,sameSite: 'none', secure: true }).status(200).json("logged out");
    } catch (error) {
        next(error);
    }
}


module.exports = {signin,register,logout}