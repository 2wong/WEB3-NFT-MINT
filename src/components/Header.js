import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsInstagram, BsDiscord } from 'react-icons/bs';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiFillTwitterSquare, AiOutlineMenu } from 'react-icons/ai';
import './Header.css'
const Header = (props) => {

    const [displayNav, setDisplayNav] = useState(false)

    return (
        <>
            <div className='header-container'>
                <Row className='header-row'>
                    <Col md={2} xs={2}>
                  
                    </Col>
                    <Col className='nav-links' md={7} lg={7}>
                        <ul className='nav-list'>
                            <li className='header-link'><a href='#home' >Home</a></li>
                            <li className='header-link'><a href='#about'>About Us</a></li>
                            <li className='header-link'><a href='#roadmap'>Roadmap</a></li>
                            <li className='header-link'><a href='#artist'>Out Artist</a></li>
                            <li className='header-link faq'><a href='#faq'>FAQ</a></li>
                        </ul>

                    </Col>
                    <Col xl={2} lg={2} md={4} sm={5} xs={7}  >
                        <ul className='nav-list'>
                            <li className='header-link-icon'><a href='https://www.instagram.com/lordsocietynft/' target="_blank"><BsInstagram /></a></li>
                            <li className='header-link-icon'><a href='https://twitter.com/lordsociety_nft' target="_blank"><AiFillTwitterSquare /></a></li>
                            <li className='header-link-icon'><a href='https://discord.com/invite/lordsociety' target="_blank"><BsDiscord /></a></li>
                            <div className='menu-icon' onClick={() => setDisplayNav(!displayNav)}>{displayNav ? <BiMenuAltRight /> : <AiOutlineMenu />}</div>

                        </ul>

                    </Col>
                </Row>



            </div>
            <div className='responsive-links' md={7} lg={7}>
                <ul className={displayNav ? 'nav-list-responsive' : 'no-display'}>
                    <li className='header-link'><a href='#home' onClick={() => setDisplayNav(false)}>Home</a></li>
                    <li className='header-link'><a href='#about' onClick={() => setDisplayNav(false)}>About Us</a></li>
                    <li className='header-link'><a href='#roadmap' onClick={() => setDisplayNav(false)}>Roadmap</a></li>
                    <li className='header-link'><a href='#artist' onClick={() => setDisplayNav(false)}>Out Artist</a></li>
                    <li className='header-link faq'><a href='#faq' onClick={() => setDisplayNav(false)}>FAQ</a></li>
                </ul>

            </div>
        </>
    );
}

export default Header;
