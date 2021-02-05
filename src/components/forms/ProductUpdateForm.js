import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { getBrands } from "../../functions/brand"


const { Option } = Select;

const ProductUpdateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleCategoryChange,
  categories,
  handleSubCatagoryChange,
  subOptions,
  arrayOfSubs,
  setArrayOfSubs,
  selectedCategory,
  // subOptions,
  showSub,
  showSecondSub,
  secondSubOptions,
  handlebrandChange
}) => {

  const [brandss, setBrands] = useState([]);


  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () =>
    getBrands().then((c) => setBrands(c.data));

  // destructure
  const {
    title,
    description,
    price,
    category,
    MRP,
    subs,
    sub,
    secondSubs,
    shipping,
    quantity,
    images,
    colors,
    brands,
    color,
    brand,
    ShelfLife,
    originCountry
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          name="price"
          className="form-control"
          value={price}
          onChange={handleChange}
        />
      </div>


      <div className="form-group">
        <label>MRP</label>
        <input
          type="number"
          name="MRP"
          value={MRP}
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Shipping</label>
        <select
          value={shipping === "Yes" ? "Yes" : "No"}
          name="shipping"
          className="form-control"
          onChange={handleChange}
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      <div className="form-group">
        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          className="form-control"
          value={quantity}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Country of Origin</label>
        <input
          type="string"
          name="originCountry"
          value={originCountry}
          className="form-control"
          onChange={handleChange}
        />
      </div>


      <div className="form-group">
        <label>Shelf Life</label>
        <input
          type="string"
          name="ShelfLife"
          value={ShelfLife}
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Brand</label>
        <select
          name="brand"
          className="form-control"
          value={brand}
          onChange={handleChange}
        >
          <option>Please select</option>
          {brandss.length > 0 &&
            brandss.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>

      <div className="form-group">
        <label>Category</label>
        <select
          name="category"
          className="form-control"
          onChange={handleCategoryChange}
          value={selectedCategory ? selectedCategory : category._id}
        >
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>
        <div className="form-group">
        <label>Sub Category</label>
        
        <select
          name="subs"
          value={arrayOfSubs}
          // onChange={(value) => setValues({ ...values, subs: value })}
          className="form-control"
          onChange={(value) => setArrayOfSubs(value)}
        >
          <option>Please select</option>
          {subOptions.length > 0 &&
            subOptions.map((s) => (
              <option key={s._id} value={s._id}>
                {s.name}
              </option>
            ))}
        </select>
      </div> 


{/* 
{showSecondSub && (
        <div>
          <label>Second Sub Categories</label>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please select"
            value={secondSubs}
            onChange={(value) => setValues({ ...values, secondSubs: value })}
          >
            {secondSubOptions.length &&
              secondSubOptions.map((t) => (
                <Option key={t._id} value={t._id}>
                  {t.name}
                </Option>
              ))}
          </Select>
        </div>
      )} */}

      <br />
      <button className="btn btn-outline-info">Save</button>
    </form>
  );
};

export default ProductUpdateForm;
