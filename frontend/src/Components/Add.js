import React, { useState } from 'react';
import Bookservice from'./Bookservice';
import './Add.css'
import Menubar from './Menubar';
import Footer from './Footer';

function Add() {

    const [Book, setBook] = useState({
        bookId : '0',
        bookName : '',
        price : '0.00',
        quantity : '0',
        authorName : '',
        coverDir : '',
        bookDetails : {
          bookId : '0',
          authorName : '',
          description : '',
          publisher : '',
          language : '',
          genre : ''
        }
      })
    const [det, setBookDet] = useState({
          bookId : '0',
          authorName : '',
          description : '',
          publisher : '',
          language : '',
          genre : ''
    })

    const handleReset = (e)=> {
      setBook({
        bookId : '0',
        bookName : '',
        price : '0.00',
        quantity : '0',
        authorName : '',
        coverDir : '',
        bookDetails : {
          bookId : '0',
          authorName : '',
          description : '',
          publisher : '',
          language : '',
          genre : ''
        }
      })
      setBookDet({
        bookId : '0',
        authorName : '',
        description : '',
        publisher : '',
        language : '',
        genre : ''
      })
    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        Book.bookDetails = det;
        det.bookId = Book.bookId;
        det.authorName = Book.authorName;
        setBook({...Book});
        console.log('Form submitted');
        console.log(Book)
        addToServer(Book);
        // form.reset();
      }
      const addToServer = (book) => {
        console.log("Clicked post");
        Bookservice.postBooks(book)
        .then((response) =>{
            console.log(response.data)
            alert('Record added successfully');
          })
    }
    
    const handleBookChange = (e) =>{
        e.preventDefault();
        const {name, value} = e.target;
        setBook((c) => ({...c, [name] : value}));
    }
    const handleDetailsChange = (e) =>{
        e.preventDefault();
        const {name, value} = e.target;
        setBookDet((c) => ({...c, [name] : value}))
    }
  return (
    <div>
    <Menubar/>
      <div className='add'>
        <div className='add-container'>
        <div className='add-form-container'>
          <h2 style={{fontFamily:'SFProSemiBold'}}>Insert book</h2>
            <form onSubmit={handleSubmit}>

              <div className='form'>
                <div className='form-item'>
                  <label className='form-label'>Book Id:</label> 
                  <input type='number' placeholder='Enter Book Id' value={Book.bookId} name='bookId' onChange={handleBookChange} className='bookbox'/><br/>
                </div>

                <div className='form-item'>
                  <label className='form-label'>Book name:</label>
                  <input type='text' placeholder='Enter Book name' value={Book.bookName} name='bookName' onChange={handleBookChange} className='bookbox'/><br/>
                </div>

                <div className='form-item'>
                  <label className='form-label'>Price:</label>
                  <input type='number' step='0.01' min='0' max='5000' placeholder='Enter price' value={Book.price} name='price' onChange={handleBookChange} className='bookbox'/><br/>
                </div>

                <div className='form-item'>
                  <label className='form-label'>Author:</label>
                  <input type='text' placeholder='Enter Author name' value={Book.authorName} name='authorName' onChange={handleBookChange} className='bookbox'/><br/>
                </div>

                <div className='form-item'>
                  <label className='form-label'>Quantity:</label>
                  <input type='number' placeholder='Enter quantity' value={Book.quantity} name='quantity' onChange={handleBookChange} className='bookbox'/><br/>
                </div>

                <div className='form-item'>
                  <label className='form-label'>Book Cover URL:</label>
                  <input type='text' placeholder='Enter URL' value={Book.coverDir} name='coverDir' onChange={handleBookChange} className='bookbox'/><br/>
                </div>
              </div>

              <div className='form'>
                <div className='form-item'>
                  <label className='form-label'>Description:</label>
                  <input type='text' placeholder='Description' value={det.description} name='description' onChange={handleDetailsChange} className='bookbox'/><br/>
                </div>

                <div className='form-item'>
                  <label className='form-label'>Genre:</label>
                  <input type='text' placeholder='Enter genre' value={det.genre} name='genre' onChange={handleDetailsChange} className='bookbox'/>
                </div>

                <div className='form-item'>
                  <label className='form-label'>Language:</label>
                  <input type='text' placeholder='Language' value={det.language} name='language' onChange={handleDetailsChange} className='bookbox'/>
                </div>

                <div className='form-item'>
                  <label className='form-label'>Publisher:</label>
                  <input type='text' placeholder='Publisher' value={det.publisher} name='publisher' onChange={handleDetailsChange} className='bookbox'/><br/>
                </div>
              </div>
              <div className='btn-cont'>
              <button type='submit' className='btn'>Insert Record</button>
              <button type='reset' onClick={handleReset} className='btn'>Reset</button>
              </div>
            </form>
        </div>
      </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Add