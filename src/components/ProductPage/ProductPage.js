import React from "react";
import classes from "./ProductPage.module.css";

const ProductPage = (props) => {
  const renderDescription = () => (
    <div className={classes.Product_Description}>
      <h2 className={classes.Product_Title}>Title</h2>
      <h3 className={classes.Product_Price}>Price</h3>
      <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </h4>
      <form className={classes.Product_Button}>
        <label>QTY:</label>
        <input className={classes.Input} type="number" min="1" />
        <button>ADD TO CART</button>
      </form>
    </div>
  );

  // TODO Render other products.
  const dummyProduct = {
    title: "TITLE",
    price: "PRICE",
    img: "/",
  };

  const dummyProducts = [];

  for (let i = 0; i < 12; i++) {
    dummyProducts.push(dummyProduct);
  }

  const renderOtherProducts = () =>
    dummyProducts.map((dummy, index) => {
      return (
        <div className={classes.Others_Product} key={index}>
          <img src={dummy.img} alt={"product"}></img>
          <p>{dummy.title}</p>
          <p>{dummy.price}</p>
        </div>
      );
    });

  return (
    <>
      <div>HEADER HERE</div>
      <div className={classes.Product_page}>
        <div className={classes.Main}>
          <div className={classes.Product_img}>
            <img src="/" alt="product_image" />
          </div>
          {renderDescription()}
        </div>
        <div style={{ fontSize: "30px" }}>OTHER PRODUCTS</div>
        <div className={classes.Others}>{renderOtherProducts()}</div>
        <div>FOOTER HERE</div>
      </div>
    </>
  );
};

export default ProductPage;
