import React from "react";
import { VscThreeBars } from "react-icons/vsc";

export default function Header(){
  return (
  <div style={{backgroundColor:'black',padding:'1rem',position:'fixed',top:'0',width:'100%',color:'orange',display:'flex',justifyContent:'space-between',opacity:'0.8'}}>
  <strong style={{color:'orange'}}>SATHISH KUMAR</strong>
  <VscThreeBars />
  </div>
  )
}