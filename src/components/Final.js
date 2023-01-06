import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate,useParams} from 'react-router-dom'
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import {Routes,Route, BrowserRouter} from 'react-router-dom'; 



function Final(){
  let navigate = useNavigate()
  let params = useParams()
  let [email,setEmail] = useState("")
  let [password,setpassword] = useState("")
  
  let handleSubmit = async()=>{
    console.log("jay")
    try { 
      let res = await axios.get(`https://6380fd1e8efcfcedac14e348.mockapi.io/reactapp`)
      .then(function (response) {
          // sessionStorage.setItem('token',response.data.access_token)
          console.log((response))
          console.log(email, password)
          let resData = response.data
          for(let data of resData) {
            console.log(data)
            if(data.email == email && data.password == password) {
               // navigate('/all-users')
               console.log("inside")
               window.location.assign("src\components\InvoiceForm")
            }
          }
          // console.log(sessionStorage.getItem('token'));
          console.log('Next Page ')
        }
      )
    }catch(error)
    {
      console.log("jay in err")
    }      
     
  }
  return <>
   <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-2">User Login</NavLink>
                   
                </Container>
            </Navbar>
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter login email"/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Enter login password"/>
      </Form.Group>
      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
</>
}
export default Final