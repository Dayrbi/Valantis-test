import { useState, useEffect } from "react";
import "./MainPage.css";
import { api } from "../../services/services";
import {ProductItem} from '../../components/ProductItem/ProductItem';
export const MainPage = () => {
  const [productID, setProductID] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProductsID();
  }, []);
  useEffect(() => {
    getProductsOfId()
  }, [productID]);
  async function getProductsID() {
    try {
      const res = await api.post("", {action: "get_ids", params: {offset: 10, limit: 30}});
      if(!res.data.result) {
        throw new Error("Something went wrong");
      }
      setProductID(res.data.result);
    } catch (e) {
      console.log(e.message || e);
    }
  }
  async function getProductsOfId() {
    try {
      const res = await api.post("", {action: "get_items", params: {ids: productID}});
      if(!res.data.result) {
        throw new Error("Something went wrong ");
      }
      const IdArr = [];
      const uniqArr = res.data.result.filter((el) => {
        if(IdArr.includes(el.id)) {
          return 
        }
        IdArr.push(el.id)
        return el
      })
      console.log(uniqArr)
      setProduct(uniqArr);
    } catch (e) {
      console.log(e.message || e);
    }
  }
  return (
    <div className="main-container">
      <div className="list-container">
        <div className="initial-list-container">
          <span>ID</span>
          <span>Product name</span>
          <span>Brand name</span>
          <span>Price</span>
        </div>
        {product.map((el) => (
          <ProductItem
            id={el.id}
            name={el.product}
            brand={el.brand}
            price={el.price}
            key={el.id}
          />
        ))}
      </div>
    </div>
  );
};
