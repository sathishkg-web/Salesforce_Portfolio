import React from 'react';

export default function Project(props) {
  console.log(props.data);
  return (
    <div
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      {props.data.map((d, i) => (
        <div
          key={i}
          style={{
            border: '1px solid grey',
            borderRadius: '1rem',
            width: '250px',
            height: '300px',
            margin: '1rem',
            padding: '15px 5px',
          }}
        >
          <img
            src={d.image}
            style={{ width: '200', height: '300', objectFit: 'contain' }}
          />
          <br></br>
          <strong>{d.title}</strong>
          <br></br>
          <p>{d.description}</p>
        </div>
      ))}
    </div>
  );
}
