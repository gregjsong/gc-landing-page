import React from 'react';

import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import FeatureIntro from '../FeatureIntro/FeatureIntro';
import SignUp from '../SignUp/SignUp';
import Footer from '../Footer/Footer';
import NavBar from '../Navigation/NavBar';

const Homepage = () => {
  return (
    <div className='homepage'>
      <NavBar />
      <Banner />
      <FeatureIntro />
      <Cards />
      <SignUp />
      <Footer />
    </div>
  )
}

export default Homepage