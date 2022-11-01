import React, { useState } from "react";
import { Alert, Box, Paper, Snackbar, Typography } from "@mui/material";
import MuiTextField from "../../atoms/MuiTextField/MuiTextField";
import { Formik } from "formik";
import MuiButton from "../../atoms/MuiButton/MuiButton";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import AuthenticationService from "../../../services/AuthenticationService";
import { useAuth } from "../../../contexts/AuthenticationContext";

export default function SignUpPage() {
  const { login } = useAuth();
  const navigation = useNavigate();
  const [errorMessage, setErrorMessage] = useState({
    isOpen: false,
    message: "",
  });
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setErrorMessage({ isOpen: false, message: "" });
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("This field can't be empty")
      .max(255, "can't be longer than 255 characters"),
    password: Yup.string().required("This field can't be empty"),
    repeatPassword: Yup.string()
      .required("This field can't be empty")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "90%", margin: "auto", paddingTop: 5 }}>
        <Paper
          sx={{
            width: "90%",
            mb: 2,
            margin: "auto",
            backgroundColor: "#37474F",
            color: "white",
          }}
        >
          <Formik
            validationSchema={validationSchema}
            initialValues={{ username: "", password: "", repeatPassword: "" }}
            onSubmit={(value) => {
              AuthenticationService()
                .signup({ username: value.username, password: value.password })
                .then(() => login(value.username, value.password))
                .then(() => navigation("/"))
                .catch(({ response }) => {
                  setErrorMessage({ isOpen: true, message: response.data });
                });
            }}
          >
            {({ handleChange, submitForm, errors }) => (
              <div
                style={{
                  textAlign: "center",
                  width: "50%",
                  margin: "auto",
                  padding: "1em",
                }}
              >
                <MuiTextField
                  error={errors.username !== undefined}
                  helperText={errors.username}
                  style={{ marginTop: "2em" }}
                  label="Username"
                  name="username"
                  onChange={handleChange}
                />
                <MuiTextField
                  error={errors.password !== undefined}
                  helperText={errors.password}
                  style={{ marginTop: "2em" }}
                  label="Password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                />
                <MuiTextField
                  error={errors.repeatPassword !== undefined}
                  helperText={errors.repeatPassword}
                  style={{ marginTop: "2em" }}
                  label="Repeat Password"
                  name="repeatPassword"
                  type="password"
                  onChange={handleChange}
                />
                <MuiButton
                  style={{ marginTop: "2em" }}
                  type="submit"
                  onClick={submitForm}
                >
                  Submit
                </MuiButton>
                <Link
                  color="#63A4FF"
                  style={{ color: "#63A4FF" }}
                  to={"/login"}
                >
                  <Typography variant="subtitle2">
                    Already have an account? Log in
                  </Typography>
                </Link>
              </div>
            )}
          </Formik>
        </Paper>
      </Box>
      <Snackbar
        open={errorMessage.isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {errorMessage.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
