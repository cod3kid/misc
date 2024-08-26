import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductListing = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data.products);
      });
  }, []);

  return (
    <div>
      <h3>Home</h3>
      <span>All Products</span>
      {allProducts.map((item) => {
        return (
          <Link key={item.id} to={`/products/${item.id}`}>
            <img src={item.thumbnail} />
            <span>{item.title}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductListing;
