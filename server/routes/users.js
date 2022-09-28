const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      //if error occured
      return res.status(400).send({ message: error.details[0].message });
    //if not error occured
    const user = await User.findOne({ email: req.body.email }); //check weather the users exists or not.
    if (user) {
      //if user exists
      return res
        .status(409)
        .send({ message: "User with given email already exists!" });
    }
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
