import React, { useEffect, useState } from "react";
import { getProduct, productStar } from "../functions/product";
import SingleProduct from "../components/cards/SingleProduct";
import { useSelector } from "react-redux";
import { getRelated } from "../functions/product";
import ProductCard from "../components/cards/ProductCard";
import BlackNavigation from "../components/BlackNavigation/BlackNavigation";
import Laptop from "../images/laptop.png";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'


const Product = ({ match }) => {
  const [product, setProduct] = useState({});
  const [related, setRelated] = useState([]);
  const [star, setStar] = useState(0);
  // redux
  const { user } = useSelector((state) => ({ ...state }));

  const { slug } = match.params;

  const isMobile = useMediaQuery({ query: '(max-width: 850px)' })


  useEffect(() => {
    loadSingleProduct();

  }, [slug]);

  useEffect(() => {
    if (product.ratings && user) {
      let existingRatingObject = product.ratings.find(
        (ele) => ele.postedBy.toString() === user._id.toString()
      );
      existingRatingObject && setStar(existingRatingObject.star); // current user's star
    }
  });


  const loadSingleProduct = () => {
    getProduct(slug).then((res) => {
      setProduct(res.data);
      // load related
      getRelated(res.data._id).then((res) => setRelated(res.data));
    });

  };

  const onStarClick = (newRating, name) => {
    setStar(newRating);
    console.table(newRating, name);
    productStar(name, newRating, user.token).then((res) => {
      console.log("rating clicked", res.data);
      loadSingleProduct(); // if you want to show updated rating in real time
    });
  };



  return (
    <>
      <div className="modal_body">
        <BlackNavigation title="product View" />
        <SingleProduct product={product} />

        {!isMobile && (
          <section className="modal_content modal_content--scrollable modal_right-column modal_right-column_border">
            <div>
              <div className="item-detail_suggested-products product-view-search">
                <div className="pdl-generic-content_container">
                  <div className="pdl-generic-content_wrapper pdl-generic-content_container--max">
                    <div className="pdl-generic-content_full pdl-generic-content-small">
                      <div className="product-view product-view-search">
                        <div className="product-set spyglass-nav-group_wrapper pdl-generic-content_container--max">
                          <div className="zone-block">
                            <div className="zone-block_header">
                              <h2 className="zone-block_title"> Similar Suggestions </h2>
                            </div>
                            <ul className="tile-list tile-list--undefined">
                              {related.length ? (
                                related.map((r) => (
                                  <>
                                    <ProductCard product={r} />
                                  </>

                                ))
                              ) : (
                                  <div className="text-center col">No Products Found</div>
                                )}



                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>
        )}


      </div>

    </>
    // <div className="container-fluid">
    //   <div className="row pt-4">
    //     <SingleProduct
    //       product={product}
    //       onStarClick={onStarClick}
    //       star={star}
    //     />
    //   </div>

    //   <div className="row">
    //     <div className="col text-center pt-5 pb-5">
    //       <hr />
    //       <h4>Related Products</h4>
    //       <hr />
    //     </div>
    //   </div>

    //   <div className="row pb-5">
    //     {related.length ? (
    //       related.map((r) => (
    //         <div key={r._id} className="col-md-4">
    //           <ProductCard product={r} />
    //         </div>
    //       ))
    //     ) : (
    //       <div className="text-center col">No Products Found</div>
    //     )}
    //   </div>
    // </div>
  );
};

export default Product;
