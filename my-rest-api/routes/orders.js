const express = require("express");
const _ = require("lodash");
const { Order, ValidateOrder, generateOrderNumber } = require("../models/order");
const auth = require("../middleware/auth");
const router = express.Router();
const {User} =require("../models/user");

router.get("/my-orders",auth, async (req, res) => {
  if (req.user.worker) return res.status(401).send("Access denied.");
  const order = await Order.find({ user_id: req.user._id });
  res.send(order);
});

router.delete("/:id", auth, async (req, res) => {
  
  const order = await Order.findOneAndRemove({
    _id: req.params.id,
    user_id: req.user._id
  });
  if (!order)
    return res.status(404).send("The order with the given ID was not found.");
  res.send(order);
});

router.get("/:id", auth, async (req, res) => {
  const order = await Order.findOne({
    _id: req.params.id,
    user_id: req.user._id
  });
  if (!order)
    return res.status(404).send("The card with the given ID was not found.");
  res.send(order);
});

router.post("/", auth, async (req, res) => {
  console.log(req.body)
  const { error } = ValidateOrder(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  
  let order = new Order({
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    order:req.body.order,
    OrderNumber: await generateOrderNumber(Order),
    user_id: req.user._id
  });
  post = await order.save();
  console.log(req.user._id)
  await User.findOneAndUpdate(
    {_id: req.user._id },{$push:{orders:post._id} },
    req.body)
  res.send(post);
});


module.exports = router;
