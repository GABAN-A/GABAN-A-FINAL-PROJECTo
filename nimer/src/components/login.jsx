import React, { useState } from "react";
import Input from "./helpers/input";
import { useFormik, Formik } from "formik";
import Joi from "joi";
import { formikValidateUsingJoi } from "../components/helpers/formikvalidate";
import { useNavigate ,Navigate} from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "./context/auth"

const Login =({redirect})=> {

    const [error, setError] = useState("");
    const { user, login } = useAuth();
    const navigate = useNavigate();

    const form = useFormik({
      validateOnMount: true,
      initialValues: {
        email: "",
        password: "",
      },
      validate: formikValidateUsingJoi({
        email: Joi.string().min(6).max(255).required().email({ tlds: { allow: false } }),
        password: Joi.string().min(6).max(1024).required(),
      }),
      async onSubmit(values) {
        try {
            await login(values)
            toast("Your Logged IN")
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
        <div className="container Register-bcg rounded  min-vh-75"> 
        <div className="row p-5">
        
          <form noValidate autoComplete="off" onSubmit={form.handleSubmit} className="text-end shadow col-12 p-2 rounded  mx-auto">
            {error && <div className="alert alert-danger ">{error}</div>}
            <Input
              label={"איימל"}
              name={"email"}
              type="email"
              {...form.getFieldProps("email")}
              error={form.touched.email && form.errors.email}
            ></Input>
            <Input
              label={"סיסמה"}
              name={"password"}
              type="password"
              {...form.getFieldProps("password")}
              error={form.touched.password && form.errors.password}
            ></Input>
        <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked=""></input>
              <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
            </div>
            <div className="my-2 d-flex justify-content-center">
              <button className="btn btn-primary btn-block mb-4" disabled={!form.isValid}>
                כניסה
              </button>
            </div>
            <div className="text-center">
          <p>Not a member? <a href="/Register">Register</a></p>
          <p>or sign up with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="bi bi-facebook"></i>
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="bi bi-google"></i>
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="bi bi-twitter"></i>
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="bi bi-github"></i>
          </button>
        </div>
          </form>
          </div>
        </div>
      </>
    );
  }
  
  export default Login;
  