const Joi = require("joi");
const mongoose = require("mongoose");
const _ = require("lodash");

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  address: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  phone: {
    type: String,
    required: true,
    minlength: 9,
    maxlength: 10,
  },
  order:{
    type:String,
    required:true,
    minlength:5,
    maxlength:200,
  },
  OrderNumber: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 99999999999,
    unique: true,
  },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Order = mongoose.model("userorder", orderSchema);

function ValidateOrder(order) {
  const schema = Joi.object({
    address: Joi.string().min(5).max(255).required(),
    order: Joi.string().min(2).max(1024).required(),
    name: Joi.string().min(2).max(50).required(),
    phone: Joi.string()
      .min(9)
      .max(10)
      .required()
      .regex(/^0[2-9]\d{7,8}$/),
  });

  return schema.validate(order);
}

async function generateOrderNumber(Order) {
  while (true) {
    let randomNumber = _.random(1000, 999999);
    let order = await Order.findOne({OrderNumber: randomNumber });
    if (!order) return String(randomNumber);
  }
}

exports.Order = Order;
exports.ValidateOrder = ValidateOrder;
exports.generateOrderNumber = generateOrderNumber;
