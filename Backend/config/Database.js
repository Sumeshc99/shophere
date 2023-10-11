const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex:true,
    })
    .then((con) => {
      console.log(
        `mongodb database connected to the host: ${con.connection.host}`
      );
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
};

module.exports = connectDatabase;
