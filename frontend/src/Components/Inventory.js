import React from 'react'
import { useNavigate } from 'react-router'
import './Inventory.css'
import Menubar from './Menubar';
import Footer from './Footer';

function Inventory() {
    const navigateAdd = useNavigate();
    const handleClickAdd = () => navigateAdd('/Add');

    const navigateUpdate = useNavigate();
    const handleClickUpdate = () => navigateUpdate('/Update');

    const navigateDel = useNavigate();
    const handleClickDel = () => navigateDel('/Delete');
  return (
    <div>
      <Menubar/>
      <div className='inventory'>
        <div className='inventory-container'>
          <div>
            <h1 style={{fontFamily:'SFProSemiBold'}}>Manage store's inventory !</h1>
          </div>
          <div className='properties'>
            <div className='ppt-item'>
              <h3>Upload book</h3>
              <button className='btn' onClick={handleClickAdd}>Click here</button>
            </div>
            <div className='ppt-item'>
              <h3>Update book details</h3>
              <button className='btn' onClick={handleClickUpdate}>Click here</button>
            </div>
            <div className='ppt-item'>
              <h3>Delete book</h3>
              <button className='btn' onClick={handleClickDel}>Click here</button>
            </div>
          </div>
        </div>
      <Footer/>
      </div>
    </div>
  )
}

export default Inventory