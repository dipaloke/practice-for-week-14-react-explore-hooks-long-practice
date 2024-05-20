import React, { useState } from "react";
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import "./ProductView.css";

function ProductView({ products }) {
  console.log({ products });
  const [sideOpen, setSideOpen] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(() => {
    const savedProduct = localStorage.getItem("selectedProduct");
    return savedProduct ? JSON.parse(savedProduct) : {};
  });

  const handleSideToggle = () => {
    setSideOpen(!sideOpen);
  };

  const handleSelectedProduct = (item) => {
    setSelectedProduct(item);
    localStorage.setItem("selectedProduct", JSON.stringify(item));
  };

  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map((item) => (
            <ProductListItem
              key={item.id}
              product={item}
              onClick={() => handleSelectedProduct(item)}
              isSelected={selectedProduct.id === item.id}
            />
          ))}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div className="product-side-panel-toggle" onClick={handleSideToggle}>
            {sideOpen ? ">" : "<"}
          </div>
        </div>
        {console.log({ selectedProduct })}
        <ProductDetails visible={sideOpen} product={selectedProduct} />
      </div>
    </div>
  );
}

export default ProductView;
