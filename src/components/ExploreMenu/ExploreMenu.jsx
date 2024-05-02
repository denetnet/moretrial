import React from "react";
import "./ExploreMenu.css"; //import styles
import { menu_list } from "../../assets/assets"; //Import menu list images

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Browse our Menu</h1>
      <p className="explore-menu-text">
        Discover Sweet Confections' delectable dishes. Choose from the
        categories below.
      </p>
      <div className="explore-menu-list">
        {/* Mapping through the menu list data */}
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              {/* Image for each menu item */}
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt="menu image"
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
