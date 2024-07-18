import React from 'react';

export default function SkillSet() {
  const skillset1 = ['Apex', 'LWC', 'SOQL', 'SOSL', 'Flows'];
  const skillset2 = ['Core Java', 'JavaScript', 'React.js'];
  return (
    <div
      style={{
        display: 'block',
        padding: '9vh 1rem',
        textAlign: 'center',
        height: '50vh',
        color: 'orange',
      }}
    >
      <h2>--- Skill Set ! ---</h2>
      <br></br>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          color: 'grey',
        }}
      >
        <ul>
          {skillset1.map((s, i) => (
            <li key={i} style={{ padding: '0.3rem' }}>
              {s}
            </li>
          ))}
        </ul>

        <ul>
          {skillset2.map((s, i) => (
            <li key={i} style={{ padding: '0.3rem' }}>
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
