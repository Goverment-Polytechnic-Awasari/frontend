import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './subject.css';


function subject(){

    return (
        <div className='subject-main'>
        <div className='sub_section'>
        <div className="sub sub1">

    <label className="s1">Java Programming </label>
    <a rel="noreferrer" target='_blank' href='https://docs.google.com/spreadsheets/d/1ZlCxaB2IpXlY8YIJROQDISO8_vMbRpb4/edit?usp=sharing&ouid=100148969996896430193&rtpof=true&sd=true'><div className="attendance">
      <span className="attend_label">Attendance</span>
    </div></a>

      <div>      
      <Dropdown>
        <Dropdown.Toggle className="ut" variant="success" id="dropdown-basic">
          <span className='attend_label1'> Unit Test</span>
        </Dropdown.Toggle>

      <Dropdown.Menu>
          <Dropdown.Item target='_blank' href="https://drive.google.com/drive/folders/1011dLtQ3L7_JypnmJqd8gLscyL9SQpDJ?usp=sharing">Question Paper</Dropdown.Item>
          <Dropdown.Item target='_blank'  href="https://drive.google.com/drive/folders/1DOq_PtweOX9lK9bAIiXhKQSWDzHSQhG0?usp=sharing">Answer Key</Dropdown.Item>
          {/* <Dropdown.Item target='_blank' href="#/ds-format">DS Format</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
      </div>
    {/* </div> */}

    <a rel="noreferrer" target='_blank' href='https://docs.google.com/spreadsheets/d/1-Kl0u32SshjdDSQDKDMPtWvHfdcUECEO/edit?usp=sharing&ouid=100148969996896430193&rtpof=true&sd=true'><div className="microproject">
      <span className="attend_label">Microprojects</span>
    </div></a>

    <a rel="noreferrer" target='_blank' href='https://docs.google.com/spreadsheets/d/18wLixwJClmM6YL58rgaX_CK5huAKb-kZ/edit?usp=sharing&ouid=100148969996896430193&rtpof=true&sd=true'><div className="term_work">
      <span className="attend_label">Term Work</span>
    </div></a>

      <Dropdown>
        <Dropdown.Toggle className="learn " variant="success" id="dropdown-basic">
        <span className="learn_label">Learning Materials</span>
        </Dropdown.Toggle>

      <Dropdown.Menu>
          <Dropdown.Item target='_blank' href="https://docs.google.com/spreadsheets/d/13GXZyz72UwBPReyy0SG8d34aVPEtPeCf/edit?usp=sharing&ouid=100148969996896430193&rtpof=true&sd=true">Assignments</Dropdown.Item>
          <Dropdown.Item href="/subject-teacher/priyanka-ghode/java/study-material">Study Materials</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  </div>
  </div>
  </div>
  );
}

export default subject;