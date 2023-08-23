import { response } from "express";
import Product from "../model/product-schema.js";
export const getProducts = async (request, response) => {
  try {
    const products = await Product.find({});
    return response.status(200).json(products);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};


export const getProductbyId = async (request, response) => {
  const id = request.params.id;
  try {
    const product = await Product.findOne({'id': id});
    return response.status(200).json(product);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
}