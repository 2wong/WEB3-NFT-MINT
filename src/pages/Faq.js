import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import './Faq.css'
const Faq = (props) => {
    return (
        <Container className='faq-header' id="faq" >
            <h1 className='theme-heading '>FAQ</h1>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        What is NFT?

                    </Accordion.Header>
                    <Accordion.Body>
                    NFT stands for 'non-fungible token. An NFT is basically data that is accounted for in a digital ledger, and that data represents something specific and unique. An NFT can, for example, represent a unique piece of art or a game token.
                    </Accordion.Body>
                </Accordion.Item>




                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        Where can I find my NFTs?


                    </Accordion.Header>
                    <Accordion.Body>
                    Once minted, simply connect to your OpenSea account to view your NFTs.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        What does "MINT" means?

                    </Accordion.Header>
                    <Accordion.Body>
                    NFT Minting is the process by which your digital art or digital content becomes a part of the Ethereum blockchain.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        How much does it cost to buy one Lord Token?

                    </Accordion.Header>
                    <Accordion.Body>
                    The price will be revealed soon.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}

export default Faq;