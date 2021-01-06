import { useCart } from "context/CartContext";
import Layout from "layout/Layout";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import productService from "services/product.service";
import Product from "../components/Product";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cartData } = useCart();

  useEffect(() => {
    productService.getProduct(id).then((res) => {
      setProduct(res.data[0]);
    });
  }, [id]);

  if (!product) {
    return <div>loading</div>;
  }
  return (
    <Layout title={product.name}>
      <div>
        <Product cartId={cartData?.cartId} product={product} />
        <Toaster position="bottom-right" />
      </div>
    </Layout>
  );
};

export default ProductDetails;
