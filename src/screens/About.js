import React from 'react';
import Title from '../components/Title.js';
import UnorderedList from '../components/Unorderedlist.js';

function About() {
  return (
    <div>
      <Title name = "firstTitle"/>
      <UnorderedList />
      <Title name = "SecondTitle"/>
      <Title name = "ThirdTitle"/>
    </div>
  );
}

export default About;
