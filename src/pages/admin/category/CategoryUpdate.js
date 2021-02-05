import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getCategory, updateCategory } from "../../../functions/category";
import CategoryForm from "../../../components/forms/CategoryForm";
import FileUpload from "../../../components/forms/FileUpload";


const CategoryUpdate = ({ history, match }) => {

  const initialState = {
    images: []
  };

  const { user } = useSelector((state) => ({ ...state }));

  const [names, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState(initialState);

  const {
    name,
    images
  } = values;

  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = () =>
    getCategory(match.params.slug).then((c) => setName(c.data.name));

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    setLoading(true);
    updateCategory(match.params.slug, values, user.token)
      .then((res) => {
        // console.log(res)
        setLoading(false);
        setValues("");
        toast.success(`"${res.data.name}" is updated`);
        history.push("/admin/category");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
          {loading ? (
            <h4 className="text-danger">Loading..</h4>
          ) : (
              <h4>Update category</h4>
            )}

          <div className="p-3">
            <FileUpload
              values={values}
              setValues={setValues}
              setLoading={setLoading}
            />
            {/* console.log("rehman", {values}) */}

          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setValues({ ...values, "name": e.target.value })}
                value={name}
                autoFocus
                required
              />
              <br />

              <button className="btn btn-outline-primary">Save</button>
            </div>
          </form>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default CategoryUpdate;
