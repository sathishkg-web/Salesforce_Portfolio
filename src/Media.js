import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSalesforce } from "react-icons/fa";

export default function Media() {
  return (
    <div
      style={{
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        width: 'fit-content',
        top: '80%',
        left: '95%',
        padding: '3.5px',
        fontSize:'24px'
      }}
    >
      <a
        href="https://www.linkedin.com/in/sathish-kumar-7b35b9178/"
        style={{ textDecoration: 'none', color:'orange'}}
      >
      <FaLinkedin />
      </a>
      <a
        href="https://www.salesforce.com/trailblazer/sathishkumar6254"
        style={{ textDecoration: 'none', margin: '6px 0',color:'orange' }}
      >
      <FaSalesforce />
      </a>
      <a
        href="https://github.com/sathishkg-web"
        style={{ textDecoration: 'none', color:'orange'}}
      >
      <FaGithub />
      </a>
    </div>
  );
}
