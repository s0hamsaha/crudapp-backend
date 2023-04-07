const express = require("express");
const router = express.Router();
const users = require("../models/userschema");


router.post("/register", async (req, res) => {
  const { name, email, phone, bookid, time, droneshot } = req.body;

  if (!name || !email || !phone || !bookid || !time || !droneshot) {
    res.status(422).json("Please Enter Data to Submit");
  }
  try {
    const preuser = await users.findOne({ email: email });
    console.log(preuser);
    if (preuser) {
      res.status(422).json("The user already exists");
    } else {
      res.set("Access-Control-Allow-Origin", "*");
      const adduser = new users({
        name,
        email,
        phone,
        bookid,
        time,
        droneshot,
      });
      await adduser.save();
      res.status(201).json(adduser);
      console.log(adduser);
    }
  } catch (error) {
    res.status(422).json(error);
  }
});
//get data
router.get("/getdata", async (req, res) => {
  try {
    const userdata = await users.find();
    res.status(201).json(userdata);
    console.log(userdata);
  } catch (error) {
    res.status(422).json(error);
  }
});
//get individual user data

router.get("/getuser/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const userindividual = await users.findById({ _id: id });
    console.log(userindividual);
    res.status(201).json(userindividual);
  } catch (error) {
    res.status(422).json(error);
  }
});
//update user individual

router.put("/updateUser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateduser = await users.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(updateduser);
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
});
//delete user

router.delete("/deleteuser/:id",async (req, res) => {
  try {
    const { id } = req.params;
    const deleteuser = await users.findByIdAndDelete({_id:id});
    console.log(deleteuser);
    res.status(201).json(deleteuser);
  } catch (error) {
    res.status(422).json(error);
  }
  })

module.exports = router;
