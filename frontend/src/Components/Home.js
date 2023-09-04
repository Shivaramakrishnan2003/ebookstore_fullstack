import React, { useEffect, useState } from 'react'
import Bookservice from'./Bookservice'
import './Home.css'
import SearchIcon from '@mui/icons-material/Search';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Menubar from './Menubar';
import Footer from './Footer';
import { Tooltip, Typography, tooltipClasses } from '@mui/material';
import styled from '@emotion/styled';

function Home() {

  const [alldetails, setAllDetails] = useState([]);
  const [details, setDetails] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searched,setSearched] = useState(false);
  let [page, setPage] = useState(0);
  const [totalpages, setTotalPages] = useState(0);

    function FetchDetails(page){
      console.log("Fetched by page");
      Bookservice.getBooksPage(page)
      .then((response)=>{
        console.log(response.data)
        setDetails(response.data)
      })
    }
    
    function fetchAllDetails(){
      console.log("Fetched all");
      Bookservice.getBooks()
      .then((response)=>{
        console.log(response.data)
        setAllDetails(response.data)
      })
      Bookservice.getTotalPages()
      .then((response)=>{
        setTotalPages(Math.ceil(response.data/8));
        console.log(response.data);
        // console.log('total' + totalpages);
      })
    }

    const handleChange = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
    };

    const handlePrev = (e)=> {
      e.preventDefault();
      if((page-1)>0){
        page -= 1;
        setPage(page)
        console.log(page);
        FetchDetails(page)
      }
      else{
        page = 0;
        setPage(page)
        FetchDetails(page)
      }
    }
    
    const handleNext = (e)=> {
      e.preventDefault();
      if((page+1)<totalpages){
        page += 1;
        setPage(page)
        console.log(page);
        FetchDetails(page)
        alert('Reaching end of page')
      }
    }

    const filteredData = alldetails.filter((e) => {
      if (searchInput === '') {
        return e;
      }
      else {
        return e.bookName.toLowerCase().includes(searchInput.toLowerCase())
      }
    })
    
    const bestSellers = alldetails.filter((e) => {
        return e.bookName.toLowerCase().includes("harry")
    })

    const trending = alldetails.filter((e) => {
        return e.bookDetails.genre.toLowerCase().includes("children")
    })

    const CustomWidthTooltip = styled(({ className, ...props }) => (
      <Tooltip {...props} classes={{ popper: className }} />
    ))({
      [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 280,
      },
    });

    useEffect(()=>FetchDetails(page),[])
    useEffect(()=>fetchAllDetails(),[])

  return (
    <div>
      <Menubar/>
      <div className='home'>
        <div className='home-container'>

          <div className='sidebar'>
            <div>
              <div>
                <h2 style={{fontFamily:"SFProSemiBold"}}>Best sellers</h2>
              </div>
              <div>
                {bestSellers.map
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
          </div>

          <div className='main-content'>
            <div className='search'>
            <input type='text'
                    placeholder='Search for a book'
                    value={searchInput}
                    onChange={handleChange}
                    onSelect={e=>setSearched(true)}
                    onBlur={e=>setSearched(false)}
                    className='searchBox'/>
                    <SearchIcon className='searchButton'/>
            </div>
            {(searched) ? 
            (<div className='datagrid'>
              {filteredData.map
                  (detail=>
                    <div key={detail.bookId} className='gridbook'>
                      <div>
                        <img src={detail.coverDir} alt='hp1'/>
                      </div>
                      <div className='gridbookdetails'>
                        <p>
                      <Tooltip title='hlo'>
                        <span style={{fontFamily:"SFProSemiBold"}}>
                          {detail.bookName}
                        </span>
                      </Tooltip>
                        <br/>
                        <br/>
                        by {detail.authorName}
                        </p>
                        ₹{detail.price}<br/>
                      </div>
                      {/* <button>Add to cart</button> */}
                    </div>
                )}
            </div>) : 
            (<div className='datagrid'>
              {details.map
                  (detail=>
                    <CustomWidthTooltip title={<Typography style={{fontFamily:'SFPro', fontSize:'15px'}}>{detail.bookDetails.description}</Typography>} arrow>
                    <div key={detail.bookId} className='gridbook'>
                      <div>
                        <img src={detail.coverDir} alt='hp1'/>
                      </div>
                      <div className='gridbookdetails'>
                        <p>
                        <span style={{fontFamily:"SFProSemiBold"}}>
                          {detail.bookName}
                        </span>
                        <br/>
                        <br/>
                        by {detail.authorName}
                        </p>
                        ₹{detail.price}<br/>
                      </div>
                      {/* <button>Add to cart</button> */}
                    </div>
                    </CustomWidthTooltip>
                )}
            </div>)}
            <div className='navigate'>
              <div className='inside'>
                <button onClick={handlePrev} className='navbutton left'> <NavigateBeforeIcon/> </button>
                <p className='navtext'>{page+1}/{totalpages}</p>
                <button onClick={handleNext} className='navbutton right'> <NavigateNextIcon/> </button>
              </div>
            </div>
          </div>
      
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home