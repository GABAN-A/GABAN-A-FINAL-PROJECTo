import React, { useState } from "react";
import { useFormik, Formik } from "formik";
import Joi from "joi";
import { formikValidateUsingJoi } from "../helpers/formikvalidate";
import Input from "../helpers/input";
import { useNavigate,Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import { createOrder } from "../../services/orderServices";

const CreatOrder=({redirect}) =>{
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { logout } = useAuth();
 const form = useFormik({
    validateOnMount: true,
    initialValues: {
      address: "",
      order: "",
      name: "",
      phone: "",
    },
    validate: formikValidateUsingJoi({
      address: Joi.string()
      .min(2)
      .required(),
      order: Joi.string()
        .min(6)
        .required(),
      name: Joi.string()
        .min(2)
        .required(),
      phone: Joi.string()
      .min(9)
      .max(10)
      .required()
      .regex(/^0[2-9]\d{7,8}$/),
    }),
    async onSubmit(values) {
      try {
       (await createOrder({ ...values }));
       if (redirect){
        navigate(redirect);
    } 
    } catch ({ response }) {
        if (response.status === 400) {
          setError(response.data);
          logout();
        }
      }
    },
  });
  
  return (
    <> 
    <h2 className="mt-4 text-dark p-3 mb-4  rounded text-center shadow">הזמנה חדשה</h2>
      <div className="container Register-bcg rounded border border-5 min-vh-75"> 
      <div className="row p-5">
      
        <form noValidate autoComplete="off" onSubmit={form.handleSubmit} className="text-end shadow col-lg-12 col-sm-12 col-md-9 p-2 rounded">
          {error && <div className="alert alert-danger ">{error}</div>}
          <Input 
            label={"שם"}
            name={"name"}
            type="name"
            {...form.getFieldProps("name")}
            error={form.touched.name && form.errors.name}
          ></Input>
          <Input
            label={"טלפון"}
            name={"phone"}
            type="phone"
            {...form.getFieldProps("phone")}
            error={form.touched.phone && form.errors.phone}
          ></Input>
          <Input
            label={"כתובת"}
            name={"address"}
            type="text"
            {...form.getFieldProps("address")}
            error={form.touched.address && form.errors.address}
          ></Input>
              <Input
            label={"לרשום את ההשמנה בסדה למטה"}
            name={"order"}
            type="text"
            {...form.getFieldProps("order")}
            error={form.touched.order && form.errors.order}
          ></Input>
          <div className="my-2 d-flex justify-content-center">
            <button className="btn btn-secondary" disabled={!form.isValid}>
              שלח
            </button>
          </div>
        </form>
        </div>
      </div>
    </>
  )
}

export default CreatOrder;