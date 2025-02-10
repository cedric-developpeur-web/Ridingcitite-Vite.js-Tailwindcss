import React from 'react';
import MissionAsso from '../Components/MissionAsso';
import Membres from '../Components/Membres';
import NosCours from '../Components/NosCours';

const Home = () => {
  return (
    <main>
      <MissionAsso />
      <Membres />
      <NosCours />
    </main>
  );
};

export default Home;