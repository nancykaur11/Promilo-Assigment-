import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const accessToken = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://api.kalpav.com/api/v1/product/category/retail",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log(response.data.response);
        setProducts(response.data.response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [accessToken]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = searchTerm
    ? products.filter(product =>
        product.productCategory.productCategoryName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="input-group d-flex align-items-center justify-content-center">
          <div className="form-outline" data-mdb-input-init>
            <input
              id="search-input"
              type="search"
              className="form-control"
              placeholder="Search"
              onChange={handleSearchChange}
              style={{ border: '3px solid black',width:"600px ",marginBottom:"15px" }}
            />
          </div>
        </div>
      </div>
      <div className="row">
        {filteredProducts.map((item) => (
          <div
            key={item.productCategory.productCategoryId}
            className="col-4 mb-4 d-flex align-items-center justify-content-center"
          >
            <div className="btn-dash" style={{ width: "12rem" }}>
              <img
                src={item.productCategory.productCategoryImage}
                className="card-img-top"
                alt={item.productCategory.productCategoryName}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {item.productCategory.productCategoryName}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
