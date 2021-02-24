import React, { useEffect, useState } from "react";
import { getProducts, getProductsCount, getRelated } from "../../functions/product";
import ProductCard from "../cards/ProductCard";
import LoadingCard from "../cards/LoadingCard";
import { Pagination } from "antd";
import { Link } from "react-router-dom";


const BestSellers = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productsCount, setProductsCount] = useState(0);
  const [page, setPage] = useState(1);
  const [related, setRelated] = useState([]);


  useEffect(() => {
    loadAllProducts();
  }, [page]);

  useEffect(() => {
    getProductsCount().then((res) => setProductsCount(res.data));
  }, []);

  const loadAllProducts = () => {
    setLoading(true);
    // sort, order, limit
    getProducts("sold", "desc", page).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  };

  return (
    <>
    <div className="pdl-generic-content_full">
        <div className="product-view product-view-search">
          <div className="product-set spyglass-nav-group_wrapper">
            <div>
              <div aria-labelledby="zone-heading-16141913796711082" className="zone-block zone-block-xlarge" has-shopping-list-menu="true">
                <div className="zone-block_content">
                  <div className="zone-block_header">
                    <h2 id="zone-heading-16141913796711082" className="zone-block_title"> New Arrivals </h2>
                    <Link to="/shop">
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
                    </Link>
                  </div>
                  <div className="pdl-carousel pdl-carousel--xlarge" style={{ touchAction: 'pan-y', userSelect: 'none', WebkitUserDrag: 'none', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                    <div className="pdl-carousel_row">
                      <div className="pdl-carousel_body"><button aria-label="Previous slide" className="button--reset pdl-carousel_trigger pdl-carousel_trigger--prev" style={{ display: 'none' }}>
                        <div className="pdl-carousel_trigger-icon"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Previous" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className>
                          <title lang="en">Previous</title>
                          <desc />
                          <g fill stroke="black">
                            <polyline fill="none" strokeWidth={2} strokeLinecap="square" transform="translate(15.242750, 16.485250) rotate(-180.000000) translate(-15.242750, -16.485250)" points="11 8 19.4855 16.485 11 24.9705" />
                          </g>
                        </svg></div>
                      </button>
                        <div className="pdl-carousel_container" style={{ minHeight: 'auto' }}>
                          <div className="" style={{ transform: 'translateX(0px)', height: 'auto', position: 'relative' }}>
                            <div tabIndex={-1} className="pdl-carousel_item zone-block_carousel-item" style={{ height: 'auto', width: '1240px' }}>
                              <ul className="product-list product-list-quint" view-size="xlarge" itemcountpriorslide="[object Object]" index={0}>
                                {products.map((product) => (
                                  <ProductCard product={product} />
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        {loading ? (
          <LoadingCard count={3} />
        ) : (
          <div className="row">
            {products.map((product) => (
              <div key={product._id} className="col-md-3">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div> */}

      <div className="row">
        <nav className="col-md-4 offset-md-4 text-center pt-5 p-3">
          <Pagination
            current={page}
            total={(productsCount / 3) * 10}
            onChange={(value) => setPage(value)}
          />
        </nav>
      </div>
    </>
  );
};

export default BestSellers;
