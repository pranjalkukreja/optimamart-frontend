import React, { useState, useEffect } from "react";
import { getCategories } from "../../functions/category";
import laptop from "../../images/laptop.png";



const CategoryView = () => {


  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
      loadCategories();
    }, []);

  const loadCategories = () =>
  getCategories().then((c) => setCategories(c.data));

    return (
        <>
        <div className="browse-aisles-menu visible-above-1200 menu menu--extra-large">{/**/}<div className="menu_main-content">
        <nav>
          <div className="xd" />
          <ul className="browse-aisles-menu_nav">

            {categories.sort(function (a, b) {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            return 0;
          }).map((c) =>
            <li key={c._id} className="nav-item nav-item--with-image"><a id="nav-Fresh-Start" href={"/shop/" + c.slug} className="nav-item_link">
            <div className="nav-item_image-container"><img alt="" aria-hidden="true" role="presentation" src={c.images && c.images.length ? c.images[0].url : laptop} className="nav-item_image" /></div>
             {c.name}
          </a></li>
            )}


          </ul>
        </nav>
      </div>{/**/}</div>
        </>
    )


}

export default CategoryView;