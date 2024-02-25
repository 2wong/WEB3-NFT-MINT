import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Artist from './pages/Artist'
import FAQ from './pages/Faq'
import Roadmap from './pages/Roadmap'
import Countdown from './components/Coutdown'
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [mint,setMint]=useState(1)
  return (
    <div className="App">
      <Header />
      <div className='bg-container'>
        <Container className='main-container'>
          <Row className='main-row'>
            <Col xl={5} lg={6}>
              <img className='main-img' src='https://static.vecteezy.com/system/resources/previews/029/713/317/original/3d-cartoon-of-a-little-boy-running-happily-little-boy-jumping-with-a-happy-expression-generative-ai-png.png' alt='nft' />
            </Col>
            <Col xl={5} lg={6}>
              <p className='main-text'> How many do you want to mint <Countdown />
              <input type="number" value={mint} onChange={(e)=>setMint(e.target.value)} style={{width:"150px"}} />
              
               </p>
              <button href='' target="_blank" className='Mint-btn'>MINT</button><br />
              <a href='https://opensea.io/collection/lordsocietynft-v2' target="_blank" className='buy-btn'>BUY ON OPENSEA</a>
            </Col>
          </Row>
        </Container>
      </div>
      <Home  />
      <About />
      <Roadmap />
      <Artist />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
