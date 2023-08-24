import { products } from "./constant/data.js";
import Product from "./model/product-schema.js ";
const DefaultData = async () => {
  try {
    await Product.insertMany(products);
    console.log("Date imported Successfully");
  } catch (error) {
    console.log("error while inserting data", error.message);
  }
};

export default DefaultData;
