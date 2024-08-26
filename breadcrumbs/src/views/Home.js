import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const slicedProducts = data.products.slice(0, 6);
        setTrendingProducts(slicedProducts);
      });
  }, []);

  return (
    <div>
      <h3>Home</h3>
      <span>Trending Products</span>
      {trendingProducts.map((item) => {
        return (
          <Link key={item.id} to={`/products/${item.id}`}>
            <img src={item.thumbnail} />
            <span>{item.title}</span>
          </Link>
        );
      })}

      <Link to="products">Browse All Products</Link>
    </div>
  );
};

export default Home;
