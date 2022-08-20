import React from 'react';
import Header from '../../components/Header/Header';
import Profile from '../../components/Profile';
import Footer from '../../components/Footer/Footer';
import './style.css';

export default function Home(props) {
  return (
    <div className="home-container" id={props.id || ""}>
      <Header/>
      <Profile/>
      <Footer/>
    </div>
  )
}

