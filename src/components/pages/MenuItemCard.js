import React from "react";

import HomeMenuSection from "./HomeMenuSection";
import data from "../../assets/data.json";
import "./styles.scss";

const MenuItemCard = () => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <HomeMenuSection style={{ menuWidth: "30%", menuheight: "70vh" }} />
      </div>
      {/* <hr /> */}
      {/* <div style={{ width: "100%" }}> */}
      <MenuItems />
      {/* </div> */}
    </div>

    // <div style={{ display: "flex" }}>
    //   <div style={{ flex: "1", marginRight: "20px" }}>
    //     <HomeMenuSection menuWidth="22%" />
    //   </div>
    //   <div style={{ flex: "1", marginLeft: "20px" }}>
    //     <MenuItems width="50%" />
    //   </div>
    // </div>
  );
};

const MenuItems = ({ width }) => {
  // let word = data.menu.itemName;
  // let wordSplit = word.split(" ");
  // console.log(wordSplit);
  return (
    <div className="menuItemCard" style={{ width: `${width}` }}>
      <ItemCard menu={data.menu} />
    </div>
  );
};

const ItemCard = ({ menu }) => {
  console.log("menuitemcard");

  return (
    <>
      <h1 style={{ marginLeft: "2.6rem" }}>Items</h1>
      <ul className="menu-items">
        {menu.map((item) => (
          <li className="menu-card" key={item.id + item.itemName}>
            <div className="menu-card-image">{item.itemName[0]}</div>
            <div>
              <div className="menu-head-content">
                <h3>{item.itemName}</h3>
                <p>{item.price}</p>
              </div>
              {/* <span>{item.itemCategory}</span> */}
              <div>
                <p>{item.description}</p>
                <div className="ratings">
                  <small>{item.rating}</small>
                  <small>{item.review}</small>
                </div>
              </div>
              <div className="add-order">
                <button className="order-btn-counter">-</button>
                <button className="order-btn">Add to order</button>
                <button className="order-btn-counter">+</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuItemCard;
