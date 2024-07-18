import React from 'react';
import Certification from './Certification.js';
import Education from './Education.js';
import SkillSet from './SkillSet.js';

export default function Decision() {
  const [what, setWhat] = React.useState('');

  function getDecision() {
    if (what == 'Education') {
      return <Education />;
    } else if (what == 'Skillset') {
      return <SkillSet />;
    } else {
      return <Certification />;
    }
  }

  function handleClick1() {
    setWhat('');
    return;
  }

  function handleClick2() {
    setWhat('Education');
    return;
  }

  function handleClick3() {
    setWhat('Skillset');
    return;
  }

  return (
    <div>
      <div style={{ textAlign: 'center', paddingTop: '1rem' }}>
        <button
          onClick={handleClick1}
          style={{
            color: 'orange',
            border: '1px solid white',
            padding: '1rem',
          }}
        >
          Certification
        </button>
        <button
          onClick={handleClick2}
          style={{
            color: 'orange',
            border: '1px solid white',
            padding: '1rem',
          }}
        >
          Education
        </button>
        <button
          onClick={handleClick3}
          style={{
            color: 'orange',
            border: '1px solid white',
            padding: '1rem',
          }}
        >
          Skillset
        </button>
      </div>
      {getDecision()}
    </div>
  );
}
