import "./ProductItem.css";

export const ProductItem = ({ id, name, brand, price }) => {
  return (
    <div className="product-container">
      <div className="product-container-id">
        <span>{id}</span>
      </div>
      <div>
        <span>{name}</span>
      </div>
      <div>
        <span>{brand}</span>
      </div>
      <div className="product-container-price">
        <span>{price}$</span>
      </div>
    </div>
  );
};
