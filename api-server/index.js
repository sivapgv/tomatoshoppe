const express = require("express");
const app = express();
var cors = require('cors');
const port = 3000;
const customerlist = require("./routes/customerlist");
const customer = require("./routes/customer");
const salesmaster = require("./routes/salesmaster");

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use("/customerlist", customerlist);
app.use("/customer", customer);
app.use("/salesmaster", salesmaster);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});