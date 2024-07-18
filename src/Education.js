import React from 'react';

export default function Education() {
  return (
    <div
      style={{
        display: 'block',
        padding: '12vh 1rem',
        textAlign: 'center',
        height: '50vh',
        color: 'orange',
      }}
    >
      <h2>--- Education ! ---</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '1rem',
        }}
      >
        <div
          style={{
            width: '150px',
            height: '120px',
            border: '1px solid',
            paddingTop: '30px',
            borderRadius: '0.5rem',
          }}
        >
          <h3>SSLC</h3>
          <br></br>
          <h2>
            92<span style={{ color: 'black' }}> %</span>
          </h2>
        </div>
        <div
          style={{
            width: '150px',
            height: '120px',
            border: '1px solid',
            paddingTop: '30px',
            borderRadius: '0.5rem',
            margin: '0 1vh',
          }}
        >
          <h3>HSC</h3>
          <br></br>
          <h2>
            83<span style={{ color: 'black' }}> %</span>
          </h2>
        </div>
        <div
          style={{
            width: '150px',
            height: '120px',
            border: '1px solid',
            paddingTop: '30px',
            borderRadius: '0.5rem',
          }}
        >
          <h3>B.E. CSE</h3>
          <br></br>
          <h2>
            72 <span style={{ color: 'black' }}>%</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
