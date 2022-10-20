import React from "react";
const Card = ({ name, price }) => {
  const [adding, setaddcount] = React.useState(0);
  const increase = () => setaddcount((a) => a + 1);
  const decrease = () => setaddcount((a) => a - 1);
  return (
    <div className="product_cat">
      <div className="product_cart">
        <h4>{name}</h4>
        <b>{price}</b>
        {!adding ? (
          <div className="ab">
            <button className="a" onClick={increase}>
              ADD TO CART
            </button>
          </div>
        ) : (
          <div className="bc">
            <h3>{adding}</h3>
            <button className="b" onClick={increase}>
              +
            </button>
            <button className="c" onClick={decrease}>
              -
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
5;
