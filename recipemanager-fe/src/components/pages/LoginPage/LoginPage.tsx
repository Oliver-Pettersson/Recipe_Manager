import { Alert, Box, Paper, Snackbar, Typography } from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthenticationContext";
import MuiButton from "../../atoms/MuiButton/MuiButton";
import MuiTextField from "../../atoms/MuiTextField/MuiTextField";

export default function LoginPage() {
  const {login} = useAuth()
  const navigation = useNavigate()
  const [errorMessage, setErrorMessage] = useState({isOpen: false, message: ""})
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setErrorMessage({isOpen: false, message: ""});
  };
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
            initialValues={{ username: "", password: "" }}
            onSubmit={(value, helpers) => {
              console.log(value);
              login(value.username, value.password).then(() => navigation("/")).catch(({response}) => {
                setErrorMessage({isOpen: true, message: response.data})})
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
                  to={"/signup"}
                >
                  <Typography variant="subtitle2">
                    Don't have an account yet? Sign up
                  </Typography>
                </Link>
              </div>
            )}
          </Formik>
        </Paper>
      </Box>
      <Snackbar open={errorMessage.isOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {errorMessage.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
