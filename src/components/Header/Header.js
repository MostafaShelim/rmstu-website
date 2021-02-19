import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header navbar-fixed-top">
            <div className="name-input">
                <p id="para">
                    <span>R</span>
                    <span>A</span>
                    <span>N</span>
                    <span>G</span>
                    <span>A</span>
                    <span>M</span>
                    <span>A</span>
                    <span>T</span>
                    <span>I</span>
                    <span> </span>
                    <span>S</span>
                    <span>C</span>
                    <span>I</span>
                    <span>E</span>
                    <span>N</span>
                    <span>C</span>
                    <span>E</span>
                    <span> </span>
                    <span>A</span>
                    <span>N</span>
                    <span>D</span>
                    <span> </span>
                    <span>T</span>
                    <span>E</span>
                    <span>C</span>
                    <span>H</span>
                    <span>N</span>
                    <span>O</span>
                    <span>L</span>
                    <span>O</span>
                    <span>G</span>
                    <span>Y</span>
                     <span> </span>
                    <span>U</span>
                    <span>N</span>
                    <span>I</span>
                    <span>V</span>
                    <span>E</span>
                    <span>R</span>
                    <span>S</span>
                    <span>I</span>
                    <span>T</span>
                    <span>Y</span>
                    </p>
                <Form inline id="input">
                    <FormControl style={{width:'165px'}} type="text" placeholder="Search" className="mr-sm-2" />
                    <Button style={{width:'70px',height:'35px'}} variant="outline-success">Search</Button>
                </Form>
            </div>
            <div className="nav">
                <div className="navbar">
                    <a className='link, active' href="/">HOME</a>
                    <a className='link' href="/departments">DEPARTMENTS</a>
                    <a className='link' href="/institutes">INSTITUTES</a>
                    <a className='link' href="/faculties">FACULTIES</a>
                    <a className='link' href="/adminastration">ADMINASTRATION</a>
                    <a className='link mid1' href="/research">RESEARCH</a>
                    <img className="logo" src={logo} alt=""/>
                    <a className='link mid2' href="/admission">ADMISSSION</a>
                    <a className='link' href="/notice">NOTICE</a>
                    <a className='link' href="/about">ABOUT</a>
                    <a className='link' href="/gallery">GALLERY</a>
                    <a className='link' href="/web-mail">WEB-MAIL</a>
                    <a className='link' href="/contact">CONTACT US</a>
                </div>
            </div>
        </div>
    );
};

export default Header;