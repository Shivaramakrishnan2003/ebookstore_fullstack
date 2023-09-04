import React, { useState } from 'react'
import Bookservice from'./Bookservice'
import './Login.css'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from './Footer';


function Login() {
    
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[cred, setCred] = useState([]);
  let navigate = useNavigate('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  let canLog = false;
  const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Username: ${username}, Password: ${password}`)

        try{
            Bookservice.getCustomers()
            .then((response)=>{
                console.log(response.data)
                setCred(response.data)
            })
            console.log("Fetched");
            cred.forEach( (detail) => {
                    if(detail.custEmail === username && detail.custPass === password){
                        canLog = true;
                    }
            })
            console.log(canLog)
            if(canLog===true){
                navigate('/Home')
                alert('Logged In')
            }
            else{
                throw new Error('The entered user credentials are incorrect')
            }
        }
        catch(error){
            alert('Invalid login')
            console.error('Error logging in', error)
        }
    }
    

  return (
    <div>
      <div className='login'>
        <div className='login-container'>
        <h1 style={{fontFamily:"SFProSemiBold"}}>Welcome to eBook Store !</h1>
          <div className='login-form'>
            <h1 style={{fontFamily:"SFPro"}}>Login</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  className='logincred'
                  placeholder='Username'
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleUsernameChange}
                  required/>
              </div>
              <div>
                <input
                  className='logincred'
                  placeholder='Password'
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required/>
              </div>
              <div>
                <button className='but' type="submit">Submit</button>
              </div>
            </form>
            <div>
              <p>Don't have an account? <Link to='/Signup'>Signup</Link></p>
            </div>
          </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Login