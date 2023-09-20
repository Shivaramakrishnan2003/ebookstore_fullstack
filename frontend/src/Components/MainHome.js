import React, { useState } from 'react'
import Details from './Details';
import Home from './Home';

function MainHome() {
    const [bkid,setBkid] = useState(0);
    // const [show,setShow] = useState();
    function callBackFunction(childData){
        setBkid(childData)
    }
  return (bkid) ? (<Details/>) : (<Home parentCallBack = {callBackFunction()}/>)
}

export default MainHome