import React, { useState, useEffect } from "react";
import SideSubCategories from '../category/SideSubCategories'
import { getCategories } from "../../functions/category";



const TopCategories = () => {

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () =>
    getCategories().then((c) => setCategories(c.data));

  return (
    <>
      <div>
        <div className="browse-aisles-category-pills_container spyglass-nav-group_wrapper" style={{ backgroundImage: 'url("https://i5.peapod.com/c/79/79W9F.jpg")' }}>



          <ul className="browse-aisles-category-pills_list">

            {categories.sort(function (a, b) {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              return 0;
            }).map((c) =>

              <li className key={c._id}><a aria-label="Fresh Start" href={"/shop/" + c.slug} role="link" className="browse-aisles-category-pills_white-wrapper">
                <div className="browse-aisles-category-pills_content"> <span className="browse-aisles-category-pills_name">
                  {c.name}
                </span></div>
              </a>
              </li>

            )}
          </ul>

        </div>



      </div>

    </>
  )
}

export default TopCategories;