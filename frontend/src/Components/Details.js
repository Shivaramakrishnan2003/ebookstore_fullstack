import React, { useEffect, useState } from 'react'
import './Details.css'
import { useLocation } from 'react-router'
import Footer from './Footer';
import Menubar from './Menubar';
import Bookservice from './Bookservice';

function Details() {
  const [alldetails, setAllDetails] = useState([]);
  const [bestdetails, setBestDetails] = useState([]);
  const location = useLocation();
  const state = location.state;
  console.log(state);


  
  function fetchAllDetails(){
    console.log("Fetched all");
    Bookservice.getBooks()
    //axios.post('localhost')
    .then((response)=>{
      console.log(response.data)
      setAllDetails(response.data)
    })
    Bookservice.getBestSellers()
    .then((response)=>{
      console.log(response.data)
      setBestDetails(response.data)
    })
  }


  const trending = alldetails.filter((e) => {
    return e.bookDetails.genre.toLowerCase().includes("children")
  })

  const popularByRegion = alldetails.filter((e) => {
    return e.bookDetails.language.toLowerCase().includes("tamil")
  })

  useEffect(()=>fetchAllDetails(),[])

  return (
    <div>
      <Menubar/>
    <div className='details'>
      <div className='details-container'>
    <div className='sidebar'>
            <div>
              <div>
                <h2 style={{fontFamily:"SFProSemiBold"}}>Best sellers</h2>
              </div>
              <div>
                {bestdetails.map
                  (detail=>
                    <div key={detail.bookId} className='best-seller list'>
                      <div>
                        <p>
                          {detail.bookName}
                        </p>
                      </div>
                    </div>
                )
              }
              </div>
            </div>
            <hr/>
            <div>
              <div>
                <h2 style={{fontFamily:"SFProSemiBold"}}>Trending</h2>
              </div>
              <div>
                {trending.map
                  (detail=>
                    <div key={detail.bookId} className='best-seller list'>
                      <div>
                        <p>
                          {detail.bookName}
                        </p>
                      </div>
                    </div>
                )
              }
              </div>
            </div>
            <hr/>
            <div>
              <div>
                <h2 style={{fontFamily:"SFProSemiBold"}}>Popular in தமிழ்</h2>
              </div>
              <div>
                {popularByRegion.map
                  (detail=>
                    <div key={detail.bookId} className='best-seller list'>
                      <div>
                        <p>
                          {detail.bookName}
                        </p>
                      </div>
                    </div>
                )
              }
              </div>
            </div>
            <hr/> 
          </div>


      {/* <div className='main-content'> */}
        <div className='content-container'>
          <div className='content1'>
            <div className='col-1'>
              <div className='col1-container'>
                {/* <div style={{backgroundColor:'antiquewhite', display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center'}}> */}
                  <img src={state.coverDir} style={{width:'40%', borderRadius:'20px'}} alt='bookcover'/>
                  <h1 style={{fontFamily:'SFPro', maxWidth:'500px'}}>{state.bookName}</h1>
                  <h3 style={{fontFamily:'SFPro', maxWidth:'500px'}}>by {state.authorName}</h3>
                </div>
              {/* </div> */}
            </div>
            </div>

            <div className='content2'>
            <div className='col-2'>
              <div className='col2-container'>
                <div>
                  <h2 style={{fontFamily:'SFProSemiBold'}}>Description</h2>
                  <p style={{fontFamily:'SFPro', maxWidth:'500px'}}>{state.bookDetails.description}</p>
                </div>
                <div className='details-grid'>
                  <p style={{fontFamily: 'SFPro'}}><p style={{fontFamily:'SFProSemiBold'}}>Publisher</p> {state.bookDetails.publisher}</p>
                  <p style={{fontFamily: 'SFPro'}}><p style={{fontFamily:'SFProSemiBold'}}>Sold</p> {state.quantity}</p>
                  <p style={{fontFamily: 'SFPro'}}><p style={{fontFamily:'SFProSemiBold'}}>Genre</p> {state.bookDetails.genre}</p>
                  <p style={{fontFamily: 'SFPro'}}><p style={{fontFamily:'SFProSemiBold'}}>Language</p> {state.bookDetails.language}</p>
                  <p style={{fontFamily: 'SFPro'}}><p style={{fontFamily:'SFProSemiBold'}}>Price</p>₹{state.price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        </div>
    <Footer/>
    </div>
    </div>
  )
}

export default Details