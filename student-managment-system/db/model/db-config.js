const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/sms", {
    useNewUrlParser: true,
  })
  .then((connection) => {
    console.log("concction successful");
  })
  .catch((error) => {
    console.log("error", error);
  });
