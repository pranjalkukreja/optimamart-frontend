import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomeCategory.css";
import ReactRoundedImage from "react-rounded-image";
import { getCategories } from "../../functions/category";
import laptop from "../../images/laptop.png";
import { useMediaQuery } from 'react-responsive'
import CategoryCard from "../cards/CategoryCard";


const HomeCategory = () => {

    const [categories, setCategories] = useState([]);

    const isTablet = useMediaQuery({ query: '(max-width: 900px)' })
    const isNormalScreen = useMediaQuery({ query: '(max-width: 1200px' })
    const isMobile = useMediaQuery({ query: '(max-width: 700px' })


    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = () =>
        getCategories().then((c) => setCategories(c.data));

    return (
        <>
            <div className="pdl-generic-content_full">
                <div className="product-view product-view-search">
                    <div className="product-set spyglass-nav-group_wrapper">
                        <div>
                            <div aria-labelledby="zone-heading-16141913796711082" className="zone-block zone-block-xlarge" has-shopping-list-menu="true">
                                <div className="">
                                    <div className="zone-block_header">
                                        <h2 className="zone-block_title "> Shop Popular Categories  </h2>
                                        {/* <Link to="/shop">
                                            <button aria-label="View all products" className="zone-block_link zone-block_link--zone-carousel">

                                                View All
                  <div className="zone-block_link-icon"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Next arrow" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className>
                                                    <title lang="en">Next arrow</title>
                                                    <desc />
                                                    <g fill stroke="inherit">
                                                        <path d="M0.626 31.374c0.833 0.833 2.188 0.833 3.021 0l13.858-13.858c0.419-0.419 0.628-0.97 0.624-1.517 0-0.551-0.205-1.098-0.624-1.517l-13.858-13.856c-0.833-0.833-2.188-0.833-3.021 0s-0.833 2.188 0 3.021l12.354 12.354-12.354 12.354c-0.833 0.833-0.833 2.188 0 3.019z">
                                                        </path>
                                                    </g>
                                                </svg></div></button>
                                        </Link> */}
                                    </div>

                                    <div className="tabs-details">
                                        <div id="panel-grid-view" role="tabpanel" aria-labelledby="grid-view">
                                            <div>
                                                <div className="generic-content_wrapper">
                                                    <div className="item-list-controls margin-bottom--two weekly-ad_list-controls">

                                                    </div>

                                      

                                                     {isMobile ? (
                                                        <ul className="tile-list tile-list--double">
                                                            {categories.map((category) => (
                                                                <CategoryCard category={category} />
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                            <>
                                                                {isTablet ? (
                                                                    <ul className="tile-list tile-list--double">
                                                                        {categories.map((category) => (
                                                                            <CategoryCard category={category} />
                                                                        ))}

                                                                    </ul>
                                                                ) : (
                                                                        <>
                                                                            {isNormalScreen ? (
                                                                                <ul className="tile-list tile-list--quad">
                                                                                    {categories.map((category) => (
                                                                                        <CategoryCard category={category} />
                                                                                    ))}

                                                                                </ul>
                                                                            ) : (
                                                                                    <>
                                                                                        <ul className="tile-list tile-list--quint">
                                                                                            {categories.map((category) => (
                                                                                                <CategoryCard category={category} />
                                                                                            ))}

                                                                                        </ul>
                                                                                    </>
                                                                                )}

                                                                        </>
                                                                    )}
                                                            </>
                                                        )} 

                                                </div>
                                                {/* <div className="color-bar"><button className="button button--second button-width--lg"> Show More </button></div> */}
                                            </div>
                                        </div>
                                        <div id="panel-print-view" role="tabpanel" aria-labelledby="print-view" aria-hidden="true" style={{ display: 'none' }} />
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default HomeCategory;
