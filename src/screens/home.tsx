import React from 'react';
import Header from '../components/header';
import Introduction from '../components/introduction';
import VideoSection from '../components/video';
import ButtonSection from '../components/menu';
import Contacts from '../components/contacts';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className='Home'>

      <Header />
      <Introduction />
      <VideoSection />
      <ButtonSection />
      <Contacts />
    </div>
  );
}

export default HomePage;
