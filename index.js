const mongoose = require("mongoose");
const express = require("express");
const productList = require("./model");
const products = require("./groceryItemsWithPrice.json");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(__dirname));
app.use("./uploads", express.static("uploads"));

let port = process.env.PORT || "8080";
// mongoose
//   .connect("mongodb://0.0.0.0:27017/priceComparison")
//   .then(() => {
//     console.log("Connected");
//   })
//   .catch((e) => {
//     console.log("error");
//   });
app.get("/products", async (req, res) => {
  // let data = await productList.find({});
  // res.json(data);
  res.json(products);
});
app.listen(port, () => {
  console.log("listning....");
});
