import React from 'react'
import img from '../img.png'
import './Header.css'


export const Head = () =>{
    return (
        <div className = "contain"> 
            <div className="container">
                <div className="header-left">
                    <h3>COVID-19 Tracker</h3><br/>
                    <img  className = "img" src = {img} alt = "img"/>
                </div>
                <div className="header-right">
                    <a href="https://amazing-noether-f70b8c.netlify.app/" target="_blank" rel="noreferrer" className="login">Contact us</a>
                </div>
                <div className="header-right">
                    <a href="https://romantic-torvalds-a18f8b.netlify.app/" target="_blank" rel="noreferrer" className="login">Feedback</a>
                </div>
                <div className="header-right">
                    <a href="https://stoic-agnesi-093d6f.netlify.app/" target="_blank" rel="noreferrer" className="login">Requirement Form</a>
                </div>
                <div className="header-right">
                    <a href="#" className="login">Home</a>
                </div>
            </div>
        </div>
    )
}
