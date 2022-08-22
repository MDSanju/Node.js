const path = require("path");

const products = require("../models/products.model");

exports.getProduct = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/product.html"));
};

exports.saveProduct = (req, res) => {
  const product = req.body.product;
  const price = Number(req.body.price);
  const newProduct = {
    product,
    price,
  };
  products.push(newProduct);
  res.status(200).json({
    success: "Successfully Data Added!",
    products,
  });
};

exports.getAllProducts = async (req, res) => {
  const cursor = products;
  const allProducts = await cursor;
  res.send(allProducts);
};
