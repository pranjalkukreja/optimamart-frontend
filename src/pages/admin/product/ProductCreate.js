import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { createProduct } from "../../../functions/product";
import ProductCreateForm from "../../../components/forms/ProductCreateForm";
import { getCategories, getCategorySubs } from "../../../functions/category";
import { getBrands } from "../../../functions/brand"
import { getSubs, getSubsSecond } from "../../../functions/sub"
import FileUpload from "../../../components/forms/FileUpload";
import { LoadingOutlined } from "@ant-design/icons";

const initialState = {
  description: "This is the best Apple product",
  price: "45000",
  categories: [],
  category: "",
  subs: [],
  sub: "",
  secondSubs: [],
  shipping: "Yes",
  quantity: "50",
  images: [],
  colors: ["Black", "Brown", "Silver", "White", "Blue"],
  brands: [],
  color: "White",
  brand: "",
};



const ProductCreate = () => {
  const [values, setValues] = useState(initialState);
  const [subOptions, setSubOptions] = useState([]);
  const [showSub, setShowSub] = useState(false);
  const [loading, setLoading] = useState(false);
  const [secondSubOptions, setSecondSubOptions] = useState([]);
  const [showSecondSub, setShowSecondSub] = useState(false);


  // redux
  const { user } = useSelector((state) => ({ ...state }));


  const loadItems = () => {
  }



  useEffect(() => {
    loadCategories(); 
  }, []);



  const loadBrands = () =>  getBrands().then((b) => setValues({ ...values, brands: b.data }));

  const loadCategories = () => getCategories().then((c) => setValues({ ...values, categories: c.data }));
  
  const loadSubCategories = () =>  getSubs().then((s) => setValues({ ...values, subs: s.data }));

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(values, user.token)
      .then((res) => {
        console.log(res);
        window.alert(`"${res.data.title}" is created`);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        // if (err.response.status === 400) toast.error(err.response.data);
        toast.error(err.response.data.err);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  const handleCatagoryChange = (e) => {
    e.preventDefault();
    console.log("CLICKED CATEGORY", e.target.value);
    setValues({ ...values, subs: [], category: e.target.value });
    getCategorySubs(e.target.value).then((res) => {
      console.log("SUB OPTIONS ON CATGORY CLICK", res);
      setSubOptions(res.data);
      
    });

    setShowSub(true);
    // setShowSecondSub(true);
  };

  const handlebrandChange = (e) => {
    e.preventDefault();
    console.log("CLICKED BRAND", e.target.value);
    setValues({ ...values, brand: e.target.value });
  }


  const handleSubCatagoryChange = (e) => {
    e.preventDefault();
    console.log("CLICKED SUB CATEGORY", e.target.value);
    setValues({ ...values, secondSubs: [], [e.target.name]: e.target.value });
    getSubsSecond(e.target.value).then((res) => {
      console.log("2 SUB OPTIONS ON SUB CATGORY CLICK", res);
      setSecondSubOptions(res.data);
    });
    setShowSecondSub(true);

  }


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col-md-10">
          {loading ? (
            <LoadingOutlined className="text-danger h1" />
          ) : (
            <h4>Product create</h4>
          )}
          <hr />

          {/* {JSON.stringify(values.images)} */}

          <div className="p-3">
            <FileUpload
              values={values}
              setValues={setValues}
              setLoading={setLoading}
            />
          </div>

          <ProductCreateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setValues={setValues}
            values={values}
            handleCatagoryChange={handleCatagoryChange}
            subOptions={subOptions}
            showSub={showSub}
            handleSubCatagoryChange={handleSubCatagoryChange}
            showSecondSub={showSecondSub}
            secondSubOptions={secondSubOptions}
            // handlebrandChange={handlebrandChange}

          />
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
