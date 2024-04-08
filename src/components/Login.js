import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from './Sign_img';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const history = useNavigate();

    const [inputVal, setInputVal] = useState({ email: "", password: "" });
    const [data, setData] = useState([]);


    const getData = (e) => {
        const { name, value } = e.target;

        setInputVal(() => {
            return {
                ...inputVal,
                [name]: value
            }
        });


    };

    const addData = (e) => {
        e.preventDefault();

        const getUserArr = localStorage.getItem("useryoutube");


        const { email, password } = inputVal;

        if (email === "") {
            alert("Email field is required");
        } else if (!email.includes("@")) {
            alert("Please enter valid Email Address");
        } else if (password === "") {
            alert("Password field is required");
        } else if (password.length <= 5) {
            alert("Password length should be greater than five")
        } else {
            if (getUserArr && getUserArr.length) {
                let userData = JSON.parse(getUserArr);
                const userLogin = userData.filter((element) => {
                    return element.email === email && element.password === password;
                });

                if (userLogin.length === 0) {
                    alert("Invalid Details");
                } else {

                    localStorage.setItem("user_login", JSON.stringify(userLogin))

                    history("/details");
                }




            }
        }

    };

    return (
        <div>
            <div className="container mt-5">
                <section className="d-flex justify-content-evenly flex-lg-row">
                    <div className="left_data" style={{ width: "100%" }}>
                        <h4 className="text-center col-lg-8 mb-4">Log In</h4>
                        <Form>
                            <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" onChange={getData} />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" onChange={getData} />
                            </Form.Group>
                            <Button variant="success" type="submit" onClick={addData} className="col-lg-8">
                                Submit
                            </Button>
                        </Form>
                    </div>
                    <Sign_img />
                </section>
            </div>
        </div>
    )
}

export default Login;
