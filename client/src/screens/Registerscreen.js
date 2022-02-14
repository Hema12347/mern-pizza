import React, { useState, useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { registerUser } from "../actions/userActions"
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Registerscreen() {

    AOS.init()
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword , setcpassword]=useState("")
  const registerstate = useSelector(state=>state.registerUserReducer)
  const {error ,loading ,success} = registerstate

  const dispatch=useDispatch()

function register(){
     if(password!=cpassword){
         alert("passwords not matched")
     }
     else{
         const user={
             name,
             email,
             password
         }
         console.log(user)
         dispatch(registerUser(user))
     }
}

  return (
    <div className='register'>
      <div className="row justify-content-center mt-5" data-aos='flip-left'>
        <div className="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded">

        {loading && (<Loading/>)}
        {success && (<Success success='User Registered Successfully'/>)}
        {error && (<Error error='User already registered'/>)}

          <h2 className="text-center m-2 headregister" style={{ fontSize: "35px" }}>
            REGISTER
          </h2>
          <div>
            <input required type="text" placeholder="name" className="form-control"   
            value={name}
            style={{backgroundColor:'#FF8066'}}
              onChange={(e)=>{setname(e.target.value)}}
              />
            <input required type="text" placeholder="email" className="form-control" 
             value={email}
             style={{backgroundColor:'#B0A8B9'}}
              onChange={(e)=>{setemail(e.target.value)}}
               />
            <input
              type="password"
              placeholder="password"
              className="form-control"
              style={{backgroundColor:'#FF8066'}}
              value={password}
              required
              onChange={(e)=>{setpassword(e.target.value)}}
            />
            <input
              type="password"
              placeholder="confirm password"
              className="form-control"
              style={{backgroundColor:'#B0A8B9'}}
              value={cpassword}
              required
              onChange={(e)=>{setcpassword(e.target.value)}}
            />
            <button  onClick={register}className="btn mt-3 mb-3 registerbutton" style={{backgroundColor:'#B0A8B9'}}>REGISTER</button>
            <br/>
            <a style={{color:'black'}} href="/login">Click Here To Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
