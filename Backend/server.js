const app = require("./App");
const connectDatabase = require("./config/Database");

const dotenv = require("dotenv");

// setting up config files
dotenv.config({ path: "./Backend/config/config.env" });

//connect to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `server started on: ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});

//handle unhandled promice rejections
process.on("unhandledRejection", (err) => {
  console.log(`error: ${err.message}`);
  console.log(`shut down the server due to unhandled promice rejection`);
  server.close(() => {
    process.exit(1);
  });
});
