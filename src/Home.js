import './Home.css';
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export function Home(){
    return(
        <>
         <HeaderNav/>
         <h2>Home page</h2>
         <Outlet/>
        </>
    );
}

export const HeaderNav = () =>{
  return(
    <>
    <div style={{ justifyContent:"space-between",backgroundColor: '#061e53'}}>
      <div style={{display:"flex", justifyContent:'space-around', height:'4rem', position:'relative', alignItems:'center' }}>
        <NavLink className='Text-white'><h2>StoreShop</h2></NavLink>
        <NavLink className='Text-white' to='/'>Home</NavLink>
        <NavLink className='Text-white' to='/about'>About</NavLink>
        <NavLink className='Text-white' to='/contact'>Contact</NavLink>
        <NavLink className='Text-white' to='/policy'>Policy</NavLink>
        <NavLink className='Text-white' to='/login'>Login</NavLink>
      </div>
      
    </div>
    </>
  );
}