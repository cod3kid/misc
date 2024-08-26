import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductDetails(data);
      });
  }, []);

  return (
    <div>
      <span> {productDetails?.title}</span>
      <img src={productDetails.thumbnail} />
    </div>
  );
};

export default ProductDetails;
