import React from 'react'
import './Header.css'

export const Footer = () => {

    return (
        <div className = "foot"  style={{backgroundColor: "lightgrey"}}>
            <div className  = "container">
                <div className = "container-left"><br/>
                    <h5>About us</h5><br/>
                    <ol>
                        <p>
                            Aman Pal Singh Rana
                        </p>
                        <p>
                            Mohammad Atif
                        </p>
                        <button type="button" class="btn btn-dark" >
                        <a href="https://amazing-noether-f70b8c.netlify.app/" target="_blank" className="login">Contact us</a>
                        </button>
                    </ol>
                </div><br/>
                <div className = "container-right">
                    <h5>What we used ?</h5>
                    <ol>
                        <p>
                            React js
                        </p>
                        <p>
                            MongoDb
                        </p>
                        <p>
                            HTML5
                        </p>
                        <p>
                            Material UI
                        </p>
                        <p>
                            Chart.js
                        </p>
                        <p>
                            React-Leaflet
                        </p>
                    </ol>
                </div>
            </div>
            <div className="footer-copyright text-center py-3"><h5>@ Copyright 2021</h5></div>
        </div>
    )
}

export default Footer;