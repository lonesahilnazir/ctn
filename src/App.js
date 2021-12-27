import React from 'react';

import { Blogs, ContactUs, Header, Footer, OurTeam, WhyChooseUs } from './containers'
import { Navbar } from './components'

import './App.css';

const App = () => {
    return (
        <div>
            <Navbar />
            <Header />
        </div>
    )
}

export default App
