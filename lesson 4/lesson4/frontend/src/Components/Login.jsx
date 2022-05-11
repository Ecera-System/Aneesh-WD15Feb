import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    api
      .post("/loginAuth", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        const userId = res.data._id || false;
        if (userId) {
          localStorage.setItem("user", userId);
          alert('Successfully Login')
          navigate("/dashboard");
        } else {
          const { message } = res.data;
          console.log(message);
        }
      });
  };
  return (
    <div className="container">
      <h1>Sports App</h1>
      
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} 
        onChange={(e) => setEmail(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant="primary" onClick={() => navigate("/register")} className="sigup">Sign Up</Button>
      </Form>

      
    </div>
  );
};

export default Login;
