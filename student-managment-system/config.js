const dotevn = require("dotenv");
dotevn.config({ path: "config.env" });
process.env.DEFAULT_PORT = process.env.DEFAULT_PORT || 7877;
module.exports = process.env;
