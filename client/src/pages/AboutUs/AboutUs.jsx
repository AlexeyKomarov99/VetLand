import React from 'react';
import './AboutUs.scss';
//===== components =====//
import InternalNavbar from '../../components/Common/InternalNavbar/InternalNavbar';
import AboutUsHeader from '../../components/AboutUs/AboutUsHeader/AboutUsHeader';
import HowWeLive from '../../components/AboutUs/HowWeLive/HowWeLive';
import OurTeam from '../../components/AboutUs/OurTeam/OurTeam';
import HowCanHelp from '../../components/AboutUs/HowCanHelp/HowCanHelp';
import Documents from '../../components/AboutUs/Documents/Documents';

const AboutUs = () => {
  return (
    <div className='AboutUs'>
      <InternalNavbar />
      <AboutUsHeader />
      <HowWeLive />
      <OurTeam />
      <HowCanHelp />
      <Documents />
    </div>
  )
}

export default AboutUs;