import React from "react";

import data from "../../assets/data.json";
import "./styles.scss";

const ItemCard = ({ menu }) => {
  console.log("menuitemcard");
  // const imageTile =

  return (
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
  );
};

const MenuItemCard = () => {
  // let word = data.menu.itemName;
  // let wordSplit = word.split(" ");
  // console.log(wordSplit);
  return (
    <div className="menuItemCard">
      <h1>Menu</h1>
      <ItemCard menu={data.menu} />
    </div>
  );
};

export default MenuItemCard;
