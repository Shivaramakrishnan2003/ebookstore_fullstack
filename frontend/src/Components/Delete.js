import React, { useState } from 'react'
import './Delete.css'
import Menubar from './Menubar'
import Bookservice from './Bookservice'
import Footer from './Footer'

function Delete() {

    const[id, setId] = useState('0')

    const handleChange = (e) =>{
        e.preventDefault();
        setId(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Deleted')
        addToServer(id);
    }

    const addToServer = (id) => {
        console.log("Clicked delete");
        Bookservice.deleteBook(id)
          .then((response) =>{
            console.log(response.data)
            console.log("Deleted successfully")
          })
    }
  return (
    <div>
        <Menubar/>
        <div className='delete'>
        <div className='delete-container'>
          <div className='delete-form-container'>
          <h2 style={{fontFamily:'SFProSemiBold'}}>Delete book</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-item'>
                    <label className='form-label'>Book Id:</label> 
                    <input type='number' placeholder='Enter Book Id' value={id} name='id' onChange={handleChange} className='bookbox'/><br/>
                </div>
            <button type='submit' className='btn'>Delete</button>
            </form>
          </div>
        </div>
        <Footer/>
        </div>
    </div>
  )
}

export default Delete