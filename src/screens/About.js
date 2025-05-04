import React from 'react';
import Title from '../components/Title.js';
import UnorderedList from '../components/Unorderedlist.js';

function About() {
  return (
    <div>
      <Title name="firstTitle"
        schoolname={"LumbiniIct"}
        rollno={10}
        contactnumber={9812345678} />
      <UnorderedList />
    </div>
  );
}

export default About;
