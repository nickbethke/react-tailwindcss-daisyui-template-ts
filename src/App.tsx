import React from 'react';
import './App.css';
import {NavBar} from "./components/NavBar";
import {Hero} from "./components/Hero";


function App() {

    return (
        <>
            <NavBar/>
            <Hero/>
            <div className="btm-nav">
                <button>
                    <span className="btm-nav-label">Home</span>
                </button>
                <button className="active">
                    <span className="btm-nav-label">Warnings</span>
                </button>
                <button>
                    <span className="btm-nav-label">Statics</span>
                </button>
                <button>
                    <span className="btm-nav-label">Statics</span>
                </button>
                <button>
                    <span className="btm-nav-label">Statics</span>
                </button>
            </div>
        </>
    );
}

export default App;
