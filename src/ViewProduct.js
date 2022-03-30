import React from "react";

import { useParams } from "react-router-dom";
import Product from "./Product";
const ViewProduct = () => {
  let { id } = useParams();
  let ViewProduct = Product.find((item) => item.id === id);
  return <div>qwert</div>;
};
export default ViewProduct;
