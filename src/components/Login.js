import React, { useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom'



function AddUserAPI() {
  let navigate = useNavigate()
 
  let [email,setEmail] = useState("")
  
  let [password,setpassword] = useState("")

  let handleSubmit = async()=>{
    let data = {
        email,
        password
    }
   
        try {
            let res = await axios.post('https://6380fd1e8efcfcedac14e348.mockapi.io/reactapp',data)
            if(res.status===201)
            {
                alert("Regisertation Successfull Please Login On next Page")
                navigate('/Final')
            }
        } catch (error) {
            console.log(error)
        }
  
}
  return <div className='container-fluid'>

<Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-2">User Registration</NavLink>
                   
                </Container>
            </Navbar>
      
      <Form>
       <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} placeholder="Enter email"  onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
    
      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} placeholder="Enter password"  onChange={(e)=>setpassword(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
    </div>
}

export default AddUserAPI