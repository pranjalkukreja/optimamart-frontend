import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { getBrands } from "../../functions/brand"


const { Option } = Select;

const ProductCreateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleCatagoryChange,
  handleSubCatagoryChange,
  subOptions,
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
    skuId,
    price,
    MRP,
    categories,
    originCountry,
    category,
    ShelfLife,
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
  } = values;

  return (
    <form onSubmit={handleSubmit}>

      <div className="form-group">
        <label>SKU ID</label>
        <input
          type="text"
          name="skuId"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          name="price"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>MRP</label>
        <input
          type="number"
          name="MRP"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Shipping</label>
        <select
          name="shipping"
          className="form-control"
          onChange={handleChange}
        >
          <option>Please select</option>
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
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Country of Origin</label>
        <input
          type="string"
          name="originCountry"
          className="form-control"
          onChange={handleChange}
        />
      </div>


      <div className="form-group">
        <label>Shelf Life</label>
        <input
          type="string"
          name="ShelfLife"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      {/* <div className="form-group">
        <label>Brand</label>
        <input
          type="text"
          name="brand"
          className="form-control"
          onChange={handleChange}
        />
      </div> */}

      {/* <div className="form-group">
        <label>Color</label>
        <select name="color" className="form-control" onChange={handleChange}>
          <option>Please select</option>
          {colors.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div> */}

      {/* <div className="form-group">
        <label>Brand</label>
        <select name="brand" className="form-control" onChange={handlebrandChange}>
          <option>Please select</option>
          {brands.length > 0 &&
            brands.map((b) => (
              <option key={b._id} value={b._id}>
                {b.name}
              </option>
            ))}
        </select>
      </div> */}

      <div className="form-group">
        <label>Brand</label>
        <select
          name="brand"
          className="form-control"
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
          onChange={handleCatagoryChange}
        >
          <option>Please select</option>
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>

      {showSub && (
        <div className="form-group">
        <label>Sub Category</label>
        <select
          name="subs"
          // value={subs}
          // onChange={(value) => setValues({ ...values, subs: value })}
          className="form-control"
          onChange={handleSubCatagoryChange}
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


      )}

      {/* {showSub && (
        <div>
          <label>Sub Categories</label>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please select"
            value={subs}
            onChange={(value) => setValues({ ...values, subs: value })}
          >
            {subOptions.length &&
              subOptions.map((s) => (
                <Option key={s._id} value={s._id}>
                  {s.name}
                </Option>
              ))}
          </Select>
        </div>
      )} */}

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
      )}

      <br />
      <button className="btn btn-outline-info">Save</button>
    </form>
  );
};

export default ProductCreateForm;
