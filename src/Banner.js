import React from 'react';
import ImgContainer from './ImgContainer';
import { FaDownload } from "react-icons/fa6";

export default function Banner() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100vh',
        backgroundColor: 'black',
        color: 'white',
      }}
    >
      <ImgContainer />
      <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Hello, my name is</p>
      <h1 style={{ margin: '5px 0' }}>Sathish Kumar</h1>
      <h3 style={{ color: 'white' }}>
        I'm a <span style={{ color: 'orange' }}>Salesforce CRM Developer</span>
      </h3>
      <button
        style={{
          padding: '0.7rem 2rem',
          backgroundColor: '#FFCC00',
          borderRadius: '1.4rem',
          marginTop: '8px',
          border: '1px solid',
        }}
      >
        <a href="https://jmp.sh/s/nDqkC8QE7VUPQHJyT6bf" download="sathish_resume" style={{textDecoration:'none',color:'black'}}>
        RESUME <span><FaDownload /></span></a>
      </button>
    </div>
  );
}
