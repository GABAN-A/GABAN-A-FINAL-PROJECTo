const express = require("express");
const _ = require("lodash");
const { Order} = require("../models/order");
const{User} = require("../models/user");
const auth = require("../middleware/auth");
const router = express.Router();


router.get("/all-orders", async (req, res) => {
    const order = await Order.find({});
    console.log(order)
    res.send(order);
  });
  
  router.get("/all-users", async (req, res) => {
  const user = await User.find({});
  res.send(user);
});
router.delete("/:id", auth, async (req, res) => {
    const user = await User.findOneAndRemove({
      _id: req.params.id,
      user_id: req.user._id
    });    
          while(user.orders.length!= 0){
                await Order.findOneAndRemove({
                    _id: user.orders[0]
                  });
            }     
    if (!user)
      return res.status(404).send("The user with the given ID was not found.");
    res.send(user);
  });
    module.exports = router;
    
    