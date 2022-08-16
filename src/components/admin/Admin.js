import React, {useState, useEffect} from 'react';
import "./admin.css";
import Button from '@mui/material/Button';
import Adminpage from "./Adminpage";

export default function Admin() {

  const [admin, setAdmin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    
    //login


       //make a call to the database and save the new token
       //save the amount transfered to the database
       const loginpassport = await fetch(`https://bscapp-backend.herokuapp.com/login`, 
       {
         method: 'POST',   
          headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            Email: e.target.Email.value, 
            password: e.target.password.value,
         })
      }
      );
      const checklogin = await loginpassport.json();
      /* use checkpoolsaved to notify the user that their transaction has been saved it returns true if it was successfull or false if it was bad*/
      console.log(checklogin);

      if(Object.keys(checklogin).length !== 0){
        setAdmin(true);
      } else if (!checklogin){
        setErrorMessage("incorrect login credentials");
      }
 


  }




  return (
    <div className='admin-container'>

      {!admin 
      
      ? 
       
        <form className='loginForm1' onSubmit={submit}>
        <div className='container-for-insideForm1'>
          <div className='inputCover1'>
              <input name='Email' type='email' placeholder='Email'   />
          </div>

          <div className='inputCover1'>
              <input name='password' type='password' placeholder='Password'   />
          </div>

          <Button className='submit-button' type='submit' variant="outlined">Sumbit</Button>
            <div>
              {errorMessage}
            </div>
        </div>
        </form>

       :
       <div className='contain-section'>
        <div className='admin-header'> <h2>Admin</h2>  <div> Logout </div> </div>
        <Adminpage  />
       </div>
       }



    </div>
  )
}
