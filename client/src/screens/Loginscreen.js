import React, { useState, useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { loginUser } from "../actions/userActions"
import Loading from "../components/Loading";
import Error from "../components/Error";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Loginscreen() {
  AOS.init()
 
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const loginstate = useSelector(state=>state.loginUserReducer)
    const {loading , error} = loginstate
    const dispatch = useDispatch()

    useEffect(()=>{

        if(localStorage.getItem('currentUser'))
        {
            window.location.href='/'
        }

    },[])

    function login(){
        const user={email,password}
        dispatch(loginUser(user))
    }
//row justify-content-center mt-5
//col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded
    return (
        <div className='login'>
             <div className="row justify-content-center mt-5"  data-aos='flip-left'>
        <div className="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded">
          <h2 className="text-center m-2 headlogin" style={{ fontSize: "35px" }}>
            LOGIN
          </h2>

          {loading && (<Loading/>)}
          {error && (<Error error='Invalid Credentials' />)}


          {/* style={{backgroundColor:'#D5CABD',height:'70px',borderRadius:'25px'}} */}
          <div>
           
            <input required type="text" placeholder="email" className="form-control email" 
             value={email}
             style={{backgroundColor:'#FF8066',borderRadius:'25px',height:'70px'}}
              onChange={(e)=>{setemail(e.target.value)}}
               />
            <input
              type="password"
              placeholder="password"
              className="form-control"
              style={{backgroundColor:'#FF8066',borderRadius:'25px',height:'70px'}}
              //  style={{backgroundColor:'#D5CABD',height:'70px',borderRadius:'25px'}}
              value={password}
              required
              onChange={(e)=>{setpassword(e.target.value)}}
            />
          
            <button  onClick={login}className="btn mt-3 mb-3 loginbutton">LOGIN</button>
            <br/>
            <a style={{color:'black'}} href="/register" className="mt-2 line" >Click Here To Register</a>
          </div>
        </div>
      </div>
        </div>
    )
}
 