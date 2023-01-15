import React, { useState } from "react";
import Input from "./helpers/input";
import { useFormik, Formik } from "formik";
import Joi from "joi";
import { formikValidateUsingJoi } from "../components/helpers/formikvalidate";
import {createUser, loginUser} from "../services/UserServices";
import { useNavigate,Navigate } from "react-router-dom";
import { useAuth } from "./context/auth";

const WorkerRegister =({redirect})=> {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { user } = useAuth();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
      name: "",
      phone: "",
    },
    validate: formikValidateUsingJoi({
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
      password: Joi.string()
      .min(8)
      .required().regex(/^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!*()_])[a-zA-Z0-9@#$%^&+=!]*$/),
      name: Joi.string()
        .min(2)
        .required(),
      phone: Joi.string()
        .max(10)
        .required(),
    }),
    async onSubmit(values) {
      try {
       await createUser({ ...values, worker: true })
       await loginUser({email:values.email,password:values.password})
       ;
  
       if (redirect){
        navigate(redirect);
    } 
    } catch ({ response }) {
        if (response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <> 
    <h2 className="mt-4 text-dark p-3 mb-4  rounded text-center shadow">הרשמת עובד חדש</h2>
      <div className="container Register-bcg rounded border border-5 min-vh-75"> 
      <div className="row p-5">
      
        <form noValidate autoComplete="off" onSubmit={form.handleSubmit} className="text-end shadow m-auto col-lg-9 col-sm-12 col-md-9 p-2 rounded">
          {error && <div className="alert alert-danger ">{error}</div>}
          <Input 
            label={"שם"}
            name={"name"}
            type="name"
            {...form.getFieldProps("name")}
            error={form.touched.name && form.errors.name}
          ></Input>
          <Input
            label={"איימל"}
            name={"email"}
            type="email"
            {...form.getFieldProps("email")}
            error={form.touched.email && form.errors.email}
          ></Input>
          <Input
            label={"טלפון"}
            name={"phone"}
            type="text"
            {...form.getFieldProps("phone")}
            error={form.touched.phone && form.errors.phone}
          ></Input>
          <Input
            label={"סיסמה"}
            name={"password"}
            type="password"
            {...form.getFieldProps("password")}
            error={form.touched.password && form.errors.password}
          ></Input>
          <div className="my-2 d-flex justify-content-center">
            <button className="btn btn-secondary" disabled={!form.isValid}>
              הרשמה
            </button>
          </div>
        </form>
        </div>
      </div>
    </>
  );
}

export default WorkerRegister;
