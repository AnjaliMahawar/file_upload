

import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//const config =require('../config.json') 

//RFC
export default function FileUpload() {
    //1. State/Hoook Variable
    const [file,setFile] = useState('')
    const [data,setData]=useState({
        present:0,
        loaded:true
    })


    //2. Function
    let handleChange = (e)=>{
        console.log('Changed',e[0])
        setFile(e[0])
    }
    let uploadImage = async (e)=>{ //Fat Arrow Function / Arrow function ES6  e=event
        e.preventDefault();
        console.log('OKOKOK');

        //Lets create an object of FormData Class

        //let object = new ClassName();
        let data = new FormData();
        data.append('files',file);

        //Promise Chain


        //await always wait for PO / Promise Object
        try {
            setData({
                present:0,
                loaded:true

            });
          let upload_response =   await axios({
            method: 'POST',
            url:"http://localhost:1337/api/upload",
            data,
            onUploadProgress:(progress)=>{

                console.log(progress);

                setData({
                    loaded:true,
                present: Math.round (progress.loaded /progress.total *100) 
               })
            }
        })
        setData({

            loaded:false
        });
            toast("file uploaded successfully");
            console.log('file upload response ',upload_response)
     
        } catch (error) {
              //error
        }
    }
    //3. Return Statement Return JSX
    return (
        <>
            <div className="row">
                <div className="col-6 offset-3 pb-5">
                    <h1>File Upload using ReactJS and Axios</h1>
                    <form className="mt-5" onSubmit={(e)=>{ uploadImage(e) }}>
                        <div className="mb-3">
                            <label htmlFor="file" className="form-label">Upload File</label>
                            <input onChange={ (e)=>{ handleChange(e.target.files) } } type="file" accept="image/*" name="files" className="form-control" id="file"/>
                         </div>
                           <button type="submit" className="btn btn-primary">Submit</button>
                   </form>
                   {
                       data.loaded &&
                       
                       <div className="progress mt-5" >
                            <div className="progress-bar" role="progressbar" style={{width: data.present+'%'}} aria-valuenow={data.present} aria-valuemin={0} aria-valuemax={100}>{data.present}%</div>
                       </div>
                   }

                    <ToastContainer />
                </div>
            </div>
        </>
    );
}
