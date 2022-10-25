import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import MuiTextField from "../../atoms/MuiTextField/MuiTextField";
import { Formik } from "formik";
import MuiButton from "../../atoms/MuiButton/MuiButton";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useAuth } from "../../../contexts/AuthenticationContext";

export default function LoginPage() {
  const {login} = useAuth()
  const navigation = useNavigate()
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("This field can't be empty")
      .max(255, "can't be longer than 255 characters"),
    password: Yup.string().required("This field can't be empty"),
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
            initialValues={{ username: "", password: "" }}
            onSubmit={(value) => {
              console.log(value);
              login(value.username, value.password).then(() => navigation("/"))
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
    </div>
  );
}
