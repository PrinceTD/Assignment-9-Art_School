import React from 'react';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import HomeData from '../HomeData/HomeData';
import Teacher from '../Teacher/Teacher';
import Title from '../Title/Title';

const Home = () => {
    return (
        <div>
           <Title></Title>
           <HomeData></HomeData>
           <Teacher></Teacher>
           <Contact></Contact>
        </div>
    );
};

export default Home;