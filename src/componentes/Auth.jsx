import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { GoogleLogin } from "@react-oauth/google";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      // dispatch(signin(formData, history))
    } else {
      // dispatch(signin(formData, history))
    }

    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const googleSuccess = (response) => {
    console.log("Autenticación de Google exitosa:", response);
    // Realiza acciones adicionales, como enviar datos al servidor, guardar información en el estado, etc.
  };

  const googleFailure = (error) => {
    console.log("Error en la autenticación de Google:", error);
    // Maneja el error de autenticación de Google
  };

  return (
    <Container>
      <h2>{isSignup ? "Sign up" : "Sign In"}</h2>
      <Form onSubmit={handleSubmit}>
        {isSignup && (
          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              autoFocus
              required
            />
          </Form.Group>
        )}
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        {isSignup && (
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </Form.Group>
        )}
        <Button type="submit" variant="primary">
          {isSignup ? "Sign Up" : "Sign In"}
        </Button>
        <Button onClick={switchMode} variant="link">
          {isSignup
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </Button>
        <GoogleLogin
          clientId="887454848030-hcrspiurrepmmojkcv1spvfh8607h1g9.apps.googleusercontent.com"
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          render={(renderProps) => (
            <Button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Iniciar sesión con Google
            </Button>
          )}
        />
      </Form>
    </Container>
  );
};

export default Auth;
