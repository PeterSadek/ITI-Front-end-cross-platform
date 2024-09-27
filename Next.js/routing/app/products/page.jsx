import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <ul className="products">
        <Link href="/products/fashion">Fashion</Link>
        <Link href="/products/electronics">Electronics</Link>
        <Link href="/products/utilities">Utilities</Link>
      </ul>
    </>
  );
};

export default Products;
