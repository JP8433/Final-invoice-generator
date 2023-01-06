import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom'; 
import './App.css';
import Container from 'react-bootstrap/Container';
import InvoiceForm from './components/InvoiceForm';
import Login from './components/Login'
import Final from './components/Final'

class App extends Component {
  render() {
  return (
   // <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      
      //  <InvoiceForm/>
        <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Login/>}/> 
        <Route exact path="/final" element={<Final/>}/> 
        <Route  path="/invoiceform" element={<InvoiceForm/>}/>
           
        </Routes>
        </BrowserRouter>
   
    //</div>
  );
}}

export default App;
