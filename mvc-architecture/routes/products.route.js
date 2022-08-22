const express = require("express");
const router = express.Router();

const {
  getProduct,
  saveProduct,
  getAllProducts,
} = require("../controllers/products.controller");

router.get("/addProduct", getProduct);

router.post("/products", saveProduct);

router.get("/products", getAllProducts);

module.exports = router;
