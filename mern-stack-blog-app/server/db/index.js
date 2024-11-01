const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
    .connect(
        "mongodb+srv://kaitoshuinei42:HJ2VQAdmcUUGOub0@cluster0.7dqypbz.mongodb.net/"
    )
    .then(() => {
        console.log("connected mongo db");
    })
    .catch((e) => console.log(e));
