import React from 'react';

import { Blogs, ContactUs, Header, Footer, OurTeam, WhyChooseUs } from './containers'
import { Engineer, Logos, Navbar } from './components'

import './App.css';

const App = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Logos />
            <WhyChooseUs />
            <OurTeam />
        </div>
    )
}

export default App
