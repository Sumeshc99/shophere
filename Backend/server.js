const app = require("./App");
const connectDatabase = require("./config/Database");

const dotenv = require("dotenv");

// setting up config files
dotenv.config({ path: "./Backend/config/config.env" });

//connect to database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(
    `server started on: ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});
