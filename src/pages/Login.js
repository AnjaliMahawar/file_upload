import axios from 'axios';
import React, { useState } from 'react';
const config = require('../config.json');

export default function Login() {



          //state
          const[data,setData]=useState({
              identifier:'',
              password:''

          })
            
          //function
          let handelChange=(e)=>{
              console.log(e.target.classList.contains('a_identifier'))
              
              if(e.target.classList.contains('a_identifier')){
                console.log(e.target.value)
                setData({
                    ...data,    //get privious data n place here
                      identifier: e.target.value  //set value of key /property
                
    
                   })
                  console.log("user_block")
              }
              if(e.target.classList.contains('a_password')){
                  
                console.log(e.target.value)
                setData({
                    ...data,    //get privious data n place here
                      password: e.target.value  //set value of key /property
                
    
                   })
                
                console.log("password_block")
            }
          }

          let login=async(e)=>{
            e.preventDefault();
            console.log(data);
            console.log("ANJALI")
            //await po object
             let {data} =  await axios.post(`${config.dev_url}/api/auth/local`)  ;
             console.log(data)
          }


          //return
  return (
               <div className='row'>
                    <div className='col-6 offset-4'> 
                    <form className='mt-5'onSubmit={(e)=>{login(e)}}>
                        <h1 className='offset-3'>Login From</h1>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control a_identifier" name="identifier " onChange={ (e)=>{handelChange(e)}} id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control a_password" name="password"  onChange={ (e)=>{handelChange(e)}} id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" onChange={()=>{}}id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                    
                    </div>
               </div>

                

  );
}
