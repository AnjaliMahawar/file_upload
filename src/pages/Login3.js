import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FileUpload from './FileUpload';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';

const config = require('../config.json');
export default function Login3() {


    //state
      const[data2,setData2]=useState({
            identifier:'vish@gmail.com',
            password:'06082002'
      })
      
       const[user,setUser]=useState({
         user:null,
         is_loggedin:true
       });
        useEffect(()=>{
          try {
            let user=  JSON.parse (localStorage.getItem('user',))
            if(user){

              setUser({
                 ...user,
                 is_loggedin:true
                
              })
              //logged in
            }else{
              //not logged in
              setUser({
                ...user,
                is_loggedin:false
             })
              
            }
          } catch (error) {
            
          }
         // alert('PAGE LOADED SUCCSESSFULLY');
        },
        [])

    //function
   let logOut=()=>{
    console.log('logOut');
   // localStorage.removeItem('user');
        localStorage.clear();
        //Pure JS Technique
        swal("USER LOG_OUT SUCCESSFULLY..");

        window.location.replace('/')
    }
       let handelChange=(e)=>{

          console.log(e.target.classList.contains('a_identifier'))
           if(e.target.classList.contains('a_identifier')){
               console.log(e.target.value)
               setData2({
                ...data2,    //get privious data n place here
                  identifier: e.target.value  //set value of key /property
            

               })
               console.log("identifier_block")
           }
           if(e.target.classList.contains('a_password')){
               console.log(e.target.value)
               setData2({
                  ...data2 , //get privious data n place here
                  password: e.target.value
              })
            console.log("password_block")
        }

       }

       let login=async(e)=>{
        e.preventDefault();
        console.log(data2);
        console.log("ANJALI")
        //await po object
        try {
          let {data} = await axios.post('http://localhost:1337/api/auth/local',{
            identifier:data2.identifier,
              password:data2.password,
  
          });
           console.log(data);
           toast("USER LOGGED_IN SUCCESSFULLY..");
           //console.log('file upload response ',upload_response)
    
            setUser({
                ...user,
                 is_loggedin:true      //get the previous data n place here
                
            });
          
            localStorage.setItem('user',JSON.stringify (data))
        } catch (error) {
          console.log(error);
          
        }
       
      }



    //return






    return (  

   
<>              
                    
   <div className='row'>
      <div className='col-6 offset-3'>
        {
              user.is_loggedin > 0 || <>
                <form className='mt-5' onSubmit={ (e)=>{ login(e) }}>    
                 <h1 className='offset-3'>Login From</h1>
               
               <div className="mb-3">
                   <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                   <input type="email"  className="form-control a_identifier" name="identifier"   onChange={(e)=>{ handelChange(e)}} id="exampleInputEmail1" aria-describedby="emailHelp" />
                   <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
               </div>
               <div className="mb-3">
                   <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                   <input type="password" className="form-control a_password" name="password"  onChange={(e)=>{ handelChange(e)}} id="exampleInputPassword1" />
               </div>
               
               <button type="submit" className="btn btn-primary">Submit</button>
        </form>
          </>
        }

                        
         




      </div>


  </div>     
   {
     user.is_loggedin &&
     <>
      <FileUpload/>
      
      <button onClick={()=>{logOut()}} className="btn btn-success text-center mt-8 offset-5">Logout</button>
          

      </>
   }                 
      <ToastContainer />              
</>               

                        
         
       );

}
