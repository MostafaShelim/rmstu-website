import React from 'react';
import logo from '../../images/logo.png';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="container-1">
                    <h1 className="rmstu">
                        <span>R</span>
                        <span>M</span>
                        <span>S</span>
                        <span>T</span>
                        <span>U</span>
                    </h1>
                    <img src={logo} alt=""/>
                </div>
                <div className="container-2">
                    <h2>ABOUT RMSTU</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta numquam dolorem odit mollitia sit voluptatibus reprehenderit amet modi! Repellat, asperiores?</p>
                </div>
                <div className="container-3">
                    <h2>FEATURED LINKS</h2>
                    <ul>
                        <li><a href="/notice">Jobs and vacancies</a></li>
                        <li><a href="/research">Research</a></li>
                        <li><a href="/clubs">Clubs</a></li>
                        <li><a href="/scholarship">Scholarship</a></li>
                        <li><a href="/calendar">Academic Calendar</a></li>
                        <li><a href="/web-mail">Web-mail</a></li>
                    </ul>
                </div>
                <div className="container-4">
                    <h2>Social Links</h2>
                    <ul>
                        <li><a href="/admissions">Facebook</a></li>
                        <li><a href="web-mail">Instragram</a></li>
                        <li><a href="/department">Twitter</a></li>
                        <li><a href="/linkedin">Linkedin</a></li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="copywright">
                <p>Developed and Designed By <span style={{color:'#333', fontWeight: '600', fontSize: '18px'}}>Golam Mostafa</span> 2<sup>nd</sup> batch, RMSTU - 2021</p>
                <p>Co-operated By Atik Rajib</p>
            </div>
        </div>
    );
};

export default Footer;