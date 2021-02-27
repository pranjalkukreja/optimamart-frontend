import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./../home/HomeCategory.css";
import ReactRoundedImage from "react-rounded-image";
import { getCategories } from "../../functions/category";
import laptop from "../../images/laptop.png";

const CategoryCard = ({category}) => {

    const [categories, setCategories] = useState([]);

    // useEffect(() => {
    //     loadCategories();
    // }, []);

    // const loadCategories = () =>
    //     getCategories().then((c) => setCategories(c.data));

    const { name, images, slug } = category;


    return (



            <li className="tile product-cell" style={{border: 'none'}}>
                <Link to={"/shop/" + slug}>
                <div className="simple-tile-list_item">
                    <div className="simple-tile_row spyglass-nav-group_wrapper">
                        <div aria-label="Go meatless with seafood favorites." tabIndex={0} role="link" className="simple-tile_box">
                            <div className="center">
                                <div className="simple-content-tile_image-container center"><img src={images && images.length ? images[0].url : laptop} className="simple-content-tile_image" />
                                </div>
                            </div>
                            <div className="simple-tile_copy-container select-text">
                                <p style={{color: 'black'}}>{name}</p>
                            </div>
                        </div>
                    </div>
                </div>
                </Link>


            </li>


    );
};

export default CategoryCard;