const app = require("./app/app");
const config = require("./config.js");
const port = config.DEFAULT_PORT;

app.listen("4004", "localhost", () => {
  console.log(`server start`);
});
