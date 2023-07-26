import React from "react";
import './Login.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
export const Login = () =>{
    return(
        <>
         <div className="layOut">
            <h3>Login</h3>
            <input className=" dimension" placeholder="Enter username"/>
            <input className="form- dimension" placeholder="Enter password"/>
            <button className="btn btn-primary dimension submit" type='submit'>Submit</button>
         </div>
        </>
    );
}