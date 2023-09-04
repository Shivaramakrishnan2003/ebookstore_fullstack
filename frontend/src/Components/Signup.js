import React, { useState } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import Bookservice from './Bookservice';
import Footer from './Footer';

function Signup() {

    const[customer,setCustomer] = useState({
        custId : '0',
        custName : '',
        custEmail : '',
        custPhone : '',
        custPass : ''
    });
    const[rpass,setRpass] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(customer);
        addToServer(customer);
    }
    
    const addToServer = (cust)=>{
        console.log("Posting customer...");
        console.log(customer.custId);
        Bookservice.postCustomer(cust)
        .then((response)=>{
            console.log(response.data)
            alert('Signup Successful!');
        })
    }

    const handleCustomerChange = (e) =>{
        e.preventDefault();
        const {name, value} = e.target;
        setCustomer((c) => ({...c, [name] : value}));
    }

    const handleRpassChange = (e)=>{
        setRpass(e.target.value);
    }

  return (
    <div>
    <div className='signup'>
        <div className='signup-container'>
        {/* <h1 style={{fontFamily:"SFPro"}}>eBookStore</h1> */}
            <div className='signup-form-container'>
            <h1 style={{fontFamily:"SFPro"}}>Signup</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input className='signup-form-item' placeholder='Enter id' value={customer.custId} type='tel' name='custId' onChange={handleCustomerChange} required/>
                </div>
                <div>
                    <input className='signup-form-item' placeholder='Enter name' value={customer.custName} type='text' name='custName' onChange={handleCustomerChange} required/>
                </div>
                <div>
                    <input className='signup-form-item' placeholder='Enter email' value={customer.custEmail} type='text' name='custEmail' onChange={handleCustomerChange} required/>
                </div>
                <div>
                    <input className='signup-form-item' placeholder='Enter phone' value={customer.custPhone} type='tel' name='custPhone' onChange={handleCustomerChange} required/>
                </div>
                <div>
                    <input className='signup-form-item' placeholder='Enter password' value={customer.custPass} type='password' name='custPass' onChange={handleCustomerChange} required/>
                </div>
                <div>
                    <input className='signup-form-item' placeholder='Re-enter password' value={rpass} type='password' name='rpass' onChange={handleRpassChange} required/>
                </div>
                <div>
                  <button className='but' type="submit">Submit</button>
                </div>
            </form>
            <div>
              <p>Already have an account? <Link to='/'>Login</Link></p>
            </div>
            <div style={{display:'flex', flexWrap:'wrap', width:'40%', fontSize:'small'}}>
                <p>By creating an account or logging in, you agree to eBook Store's Conditions of Use and Privacy Policy.</p>
            </div>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Signup