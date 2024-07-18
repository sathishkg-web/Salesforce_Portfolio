import React from 'react';
import { MdEmail } from "react-icons/md";
export default function Gmail(){
    return (
    <div style={{
        position: 'fixed',
        width: 'fit-content',
        top: '86%',
        left: '2%',
        padding: '3.5px',
        fontSize:'24px'
      }}>
    <button style={{border:'1px solid yellow',padding:'0.8rem 1rem',borderTopLeftRadius:'0.7rem',borderTopRightRadius:'0.7rem',backgroundColor:'#FFCC00'}}>
       <span><MdEmail /></span> <a href="mailto:sathishkg41@gmail.com" style={{textDecoration:'none',color:'black'}}>Contact</a>
    </button>
    </div>
    );
}