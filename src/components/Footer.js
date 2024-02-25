import React from 'react';
import { Container } from 'react-bootstrap';
import { BsInstagram, BsDiscord } from 'react-icons/bs';
import { BiMenuAltRight} from 'react-icons/bi';
import { AiFillTwitterSquare, AiOutlineMenu } from 'react-icons/ai';
import './Footer.css'
const Footer = (props) => {
    return (
        <div>
            <Container className='become-text'>
                <h1 className='become-header'>
                    Become A Lord<br />
                    Join Our Discord
                </h1>
                <a href='https://discord.com/invite/lordsociety' target="_blank" className='buy-btn' >Join Now</a>

            </Container>
                
            <Container className='rights-container'>
                <img height="47px" src='https://lordsocietynft.com/static/media/logo_footer.dd11ea2b8dc0160eaa82.png' alt='' />
                <p className='rights-text'>© 2021 Lord Society - NFT. All rights reserved.</p>

                <ul className='nav-list ul-icon-links'>
                        <li className='header-link-icon'><a href='https://www.instagram.com/lordsocietynft/' target="_blank"><BsInstagram /></a></li>
                        <li className='header-link-icon'><a href='https://twitter.com/lordsociety_nft' target="_blank"><AiFillTwitterSquare /></a></li>
                        <li className='header-link-icon'><a href='https://discord.com/invite/lordsociety' target="_blank"><BsDiscord /></a></li>

                    </ul>

            </Container>

        </div>
    );
}

export default Footer;
