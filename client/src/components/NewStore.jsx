import React from "react";
import { useState, Link } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialShop = {
  storeName: "",
  storeNumber: "",
  open: false,
};

function NewShop({ baseUrl }) {
  const [shop, setShop] = useState(initialShop);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setShop((prevShop) => ({
      ...prevShop,
      //computed property name
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheck = (e) => {
    setShop((prevShop) => ({
      ...prevShop,
      open: e.target.checked,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(baseUrl, shop)
      .then((shop) => {
        console.log(shop);
        setErrors({});
        navigate("/stores");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err?.response?.data?.errors);
      });
  };
  return (
    <div className="card mb-3">
      <h3 className="card-header">Add a new Store</h3>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="storeName" className="form-label">
              Store Name
            </label>
            <input
              type="text"
              name="storeName"
              id="storeName"
              className="form-control"
              value={shop.storeName}
              onChange={handleChange}
            />
            {errors.storeName && (
              <span className="form-text text-danger">
                {" "}
                {errors.storeName.message}
              </span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="storeNumber" className="form-label">
              Store Number
            </label>
            <input
              type="number"
              name="storeNumber"
              id="storeNumber"
              className="form-control"
              value={shop.storeNumber}
              onChange={handleChange}
            />
            {errors.storeNumber && (
              <span className="form-text text-danger">
                {" "}
                {errors.storeNumber.message}
              </span>
            )}
          </div>

          <div class="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="open"
              id="open"
              checked={shop.open}
              onChange={handleCheck}
            />
            <label className="form-check-label" htmlfor="open">
              Open?
            </label>
          </div>
          <div className="text-end">
            <button type="submit" className="btn btn-primary">
              Add a new Store
            </button>
            <a href="/stores/">
              <button className="btn btn-sm btn-warning ">go back home</button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewShop;
