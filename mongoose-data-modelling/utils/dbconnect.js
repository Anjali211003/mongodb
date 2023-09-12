const mongoose = require("mongoose");
module.exports = mongoose
  .connect(
    "mongodb+srv://mongo:Sweety@mongodb-demo.j1yshn9.mongodb.net/blog-app?retryWrites=true&w=majority"
  )
  .then(() => console.log("Db connected"))
  .catch(err => console.log(err.message));
