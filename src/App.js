import React from 'react';

import { Blogs, ContactUs, Header, Footer, OurTeam, WhyChooseUs } from './containers'
import { Logos, Navbar } from './components'

import './App.css';

const App = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Logos />
            <WhyChooseUs />
        </div>
    )
}

export default App
