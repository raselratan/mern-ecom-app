const app = require("./app");
const connectDB = require("./config/db");
const { serverPort } = require("./secrete");

app.listen(serverPort, async () => {
  console.log(`Server running at port ${serverPort}.`);
  await connectDB();
});
