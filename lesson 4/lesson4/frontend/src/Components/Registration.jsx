import React, { useState } from "react";
import api from "../api/axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();
  const handleRegister = async (eve) => {
    eve.preventDefault();
    api
      .post("/user/register", {
        firstName,
        lastName,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        const userId = res.data._id || false;
        if (userId) {
          localStorage.setItem("user", userId);

          alert('Successfully Registered')
        } else {
          const { message } = res.data;
          console.log(message);
        }
      });
  };

  return (
    <div>
      <h1>Registration</h1>
      <br />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicFiName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name "  value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLaName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleRegister}>
          Submit
        </Button>
        <Button variant="primary" type="submit" onClick={() => navigate('/login')} className="sigup">
          Go Back
        </Button>
      </Form>
    </div>
  );
};

export default Registration;
