import React from 'react'
import Menubar from './Menubar'
import './About.css'
import Footer from './Footer'

function About() {
  return (
    <div>
      <Menubar/>
      <div className='about'>
        <div className='about-container'>
          <div className='about-section'>
            <div className='overview'>
              <h2 style={{fontFamily:'SFProSemiBold'}}>Overview</h2>
              <p>
              The Ebook Store Website project is an online platform designed to provide users 
              with a convenient and efficient way to browse, purchase, and read a wide variety 
              of digital books. This platform offers an extensive catalog of ebooks, covering various 
              genres and topics, and aims to create an enjoyable and accessible reading experience for 
              book enthusiasts.
              </p>
            </div>
            <div className='features'>
              <h2 style={{fontFamily:'SFProSemiBold'}}>Features</h2>
              <div>
                <h4 style={{fontFamily:'SFProSemiBold'}}>User Registration and Authentication</h4>
                <p>Users can create accounts, log in, and manage their profiles. 
                  Secure authentication ensures the protection of personal information.</p>
              </div>
              <div>
                <h4 style={{fontFamily:'SFProSemiBold'}}>Search and Browse</h4>
                <p>An intuitive search and browsing system allows users to explore the ebook catalog by book title.</p>
              </div>
              <div>
                <h4 style={{fontFamily:'SFProSemiBold'}}>Book Thumbnails</h4>
                <p>Visually appealing book thumbnails in grid view, showcasing book covers,
                   titles, and authors. Used high-quality images and hover effects to provide additional information.</p>
              </div>
              <div>
                <h4 style={{fontFamily:'SFProSemiBold'}}>Responsive Design</h4>
                <p>The website is responsive, providing a seamless experience.</p>
              </div>
            </div>
            <div>
              <h2 style={{fontFamily:'SFProSemiBold'}}>Technology Stack</h2>
              <div>
                <p>Frontend : React JS</p>
                <p>Backend : SpringBoot using Java, MySQL</p>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default About