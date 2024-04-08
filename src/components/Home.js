import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from './Sign_img';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const history = useNavigate();

    const [inputVal, setInputVal] = useState({name : "", email : "", date : "", password : ""});
    const [data, setData] = useState([]);


    const getData = (e) => {
        const {name, value} = e.target;

        setInputVal(()=>{
            return {
                ...inputVal,
                [name] : value
            }
        });

        
    };
    
    const addData = (e) => {
        e.preventDefault();
        
        const {name, email, date, password} = inputVal;

        if(name === ""){
            alert("Name field is required");
        }else if(email === ""){
            alert("Email field is required");
        }else if(!email.includes("@")){
            alert("Please enter valid Email Address");
        }else if(password === ""){
            alert("Password field is required");
        }else if(date === ""){
            alert("DOB field is required");
        }else if(password.length <= 5){
            alert("Password length should be greater than five")
        }else{
            alert("Data Added successFully!");
            history("/login");
            localStorage.setItem("useryoutube", JSON.stringify([...data, inputVal]));
        }

    };

    return (
        <div>
            <div className="container mt-5">
                <section className="d-flex justify-content-evenly flex-lg-row flex-column">
                    <div className="left_data" style={{width : "100%"}}>
                        <h4 className="text-center col-lg-8 mb-4">Sign Up</h4>
                        <Form>
                            <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Enter Your Name" onChange={getData}  />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" onChange={getData}  />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                                <Form.Label>Date Of Birth</Form.Label>
                                <Form.Control type="date" name="date" onChange={getData} />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" onChange={getData}  />
                            </Form.Group>
                            <Button variant="success" type="submit" onClick={addData} className="col-lg-8">
                                Submit
                            </Button>
                        </Form>
                        <p className="mt-4">Already Have An Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
                    </div>
                   <Sign_img/>
                </section>
            </div>
        </div>
    )
}

export default Home;
