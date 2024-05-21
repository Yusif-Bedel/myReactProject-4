import React, { useContext } from "react";
import { Formik } from "formik";
import { Helmet } from "react-helmet-async";
import MainContext from "../../../context/context";
import axios from "axios";
import { BASE_URL } from "../../../config/config";

const Add = () => {
  const { data, setData } = useContext(MainContext);

  return (
    <div>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <Formik
        initialValues={{ image: "", title: "", price: "", description: "", }}
        onSubmit={(values, { resetForm }) => {
          axios
            .post(BASE_URL, {
              title: values.title,
              price: values.price,
              image: values.image,
              description: values.description,
            })
            .then((res) => {
              setData([...data, res.data]);
              resetForm();
            })
            .catch((error) => {
              console.error("There was an error adding the product!", error);
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form
            className="container text-light p-5 gap-3 d-flex flex-column w-50 mt-5 rounded-3 mb-5 bg-dark"
            onSubmit={handleSubmit}
          >
            <label htmlFor="title" className="form-label">
              Product Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              className="form-control"
              id="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {errors.title && touched.title && <div className="text-danger">{errors.title}</div>}

            <label htmlFor="description" className="form-label">
              Product Description
            </label>
            <input
              type="text"
              name="description"
              placeholder="Enter description"
              className="form-control"
              id="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            {errors.description && touched.description && <div className="text-danger">{errors.description}</div>}

            <label htmlFor="image" className="form-label">
              Product Image
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter image url"
              className="form-control"
              id="image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />
            {errors.image && touched.image && <div className="text-danger">{errors.image}</div>}

            <label htmlFor="price" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Enter price"
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            {errors.price && touched.price && <div className="text-danger">{errors.price}</div>}

           

            <button className="btn btn-primary mt-3" type="submit">
              ADD
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Add;