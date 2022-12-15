const Joi = require("joi");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
  phone:{
    type: String,
    required: true,
    minlength: 9,
    maxlength: 10,
  },
  worker: {
    type: Boolean,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  orders: Array,
});


userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, worker: this.worker,name:this.name },
    config.get("jwtKey"),{ expiresIn: "1h" }
  );
  return token;
};

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(255).required(),
    email: Joi.string().min(6).max(255).required().email().regex(	
/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
    password: Joi.string().min(6).max(1024).required(),
    phone:Joi.string().min(9).max(10).required().regex(/^0\d([\d]{0,1})([-]{0,1})\d{7}$/),
    worker: Joi.boolean().required(),
  });
  return schema.validate(user);
}

function validateCards(data) {
  const schema = Joi.object({
    orders: Joi.array().min(1).required(),
  });

  return schema.validate(data);
}

exports.User = User;
exports.validate = validateUser;
exports.validateCards = validateCards;
