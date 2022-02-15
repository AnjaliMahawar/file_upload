import React, { useState } from 'react';

export default function Login2() {
//state
const[data,setData]=useState({
    identifier:'',
    password:'',
})

//function
let login=(e)=>{
    console.log('oookkk');
    e.preventDefault();
    console.log(data)
}
 let handalChange=(e)=>{

    console.log(e.target.classList.contains('a_userName'));

    if(e.target.classList.contains('a_identifier')){
       
        console.log("identifier_block")
    }
    if(e.target.classList.contains('a_password')){
     console.log("password_block")
 }
 }



//return

  return (

      
  
       <div className='row'>
         <div className='col-6 offset-3 mt-5'>
            <form onSubmit={(e)=>{login(e)}}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control a_userName" name='identifier' onChange={(e)=>{handalChange(e)}} id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password"  className="form-control a_password" name='password' onChange={()=>{}} id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>

         </div>

       </div>
 
      );
}
