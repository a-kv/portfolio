import React from 'react';
import './App.css';
import Header from "./components/Header/Heder";
import Main from "./components/Main/Main";
import Skils from "./components/Skils/Skils";
import Projects from "./components/Progects/Projects";
import Slogan from "./components/Slogan/Slogan";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";


function App(props) {
    return (
        <div className="App">
            <div className="portfolio">
                <Header/>
                <Main/>
                <Skils/>
                <Projects/>
                <Slogan/>
                <Contacts/>
                <Footer/>
            </div>
        </div>
    );
}
export default App;
