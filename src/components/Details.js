import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState } from 'react';
import Table from 'react-bootstrap/Table';

const Details = () => {

    const [apiData, setApiData] = useState([]);

    const getuser = localStorage.getItem("user_login");
    const user = JSON.parse(getuser);



    const history = useNavigate();

    const userLogout = () => {
        localStorage.removeItem("user_login")
        history("/");
    };

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                if (!response.ok) {
                    throw new Error("Faild to Fetch Data");
                }

                const jsonData = await response.json();
                setApiData(jsonData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

    }, [])

    return (
        <div>
            {
                !user ? "error" :
                    <div >
                        <div className="d-flex justify-content-evenly my-5 px-2">
                        <p>Hi <strong className="text-success">{user[0].name}</strong> Welcome to the Student Details Page.</p>
                        <p style={{color : "blue", cursor : "pointer"}} onClick={userLogout}>LogOut</p>
                        </div>
                        <div style={{overflowX : "auto", margin : "20px"}}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Roll no</th>
                                    <th>Student Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>City</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    apiData.map((element) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td>{element.id}</td>
                                                    <td>{element.name}</td>
                                                    <td>{element.email}</td>
                                                    <td>{element.phone}</td>
                                                    <td>{element.address.city}</td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }


                            </tbody>
                        </Table>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Details;
