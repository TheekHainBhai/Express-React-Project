const mongoose = require("mongoose");

//exporting
module.exports = () => {
  const connectionParams = {
    //reqired to connect to our database
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    mongoose.connect(process.env.DB, connectionParams);   //not working 
    // mongoose.connect('mongodb://localhost:27017/Login', connectionParams);
    console.log("Connected to database successfully");
  } catch (error) {
    console.log(error);
    onsole.log("could not connect to database!");
  }
};