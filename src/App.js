import React from 'react';

import { Blogs, ContactUs, Header, Footer, OurTeam, WhyChooseUs } from './containers'
import { Logos, Navbar, Message } from './components'

import './App.css';

const App = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Logos />
            <WhyChooseUs />
            <OurTeam />
            <Message />
            <ContactUs />
            <Blogs />
        </div>
    )
}

export default App
