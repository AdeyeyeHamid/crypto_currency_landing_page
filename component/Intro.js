import React, {Component, useEffect } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import { FaCcVisa, FaCcMastercard, FaBitcoin } from "react-icons/fa";
import Why from './why.png'
import Bitcoin from './Bitcoin.png'
import { BsPlayCircleFill, BsPersonCircle, BsFillBarChartFill} from "react-icons/bs";
import ReactLogo from './logo.svg'
import { FaGlobeAmericas } from "react-icons/fa";
import './IntroStyles.css'
import Hero from './hero.png'
import Feature1 from './feature2.png'
import Feature2 from './feature3.png'
import Feature from './feature1.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Intro() {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
    return (
 <div>
    
            <div className='intro'>
            <div className='top'>
                <Row>
                    <Col xs={6} lg={6} md={6}>
                    <p data-Aos="zoom-in" data-aos-duration="4000"  className='hi'>75% save</p>
                    </Col>
                    <Col className='yo5'  xs={6} lg={6} md={6}>
                    <p data-Aos="zoom-in" data-aos-duration="4000" >for the Black friday</p>
                    </Col>
                </Row>
            </div>
            <div>
<Container>
                <Row xs={1} lg={2}>
                    <Col data-Aos="zoom-in" data-aos-duration="4000"  >
                    <h1  data-Aos="zoom-in" data-aos-duration="4000"  className='intro1'>Fastest  & Secure Platform To Invest In Crypto</h1>
                    <p  data-Aos="zoom-in" data-aos-duration="4000"  className='intro2'>Buy and sell cyptocurrencies, trusted 10M wallets, in over $30 billion in transactions</p>
                    <Link data-Aos="zoom-in" data-aos-duration="4000"  to='/' className='btn1'>Try for FREE<BsPlayCircleFill size={30} style={{color: '#fff'}} /></Link>
                    </Col>
                    <Col>
                    <img data-Aos="zoom-in" data-aos-duration="4000"  className='img' src={Hero} alt="React Logo" />
                    
                    </Col>
                </Row>
            </Container>
    
            <Container className='charts'>
                <Row xs={1} lg={3}>
                    <Col>
                    <h1  className='chart'><BsFillBarChartFill className='bar'    size={50} style={{color: 'blue'}} /> $30B <p className='digital'>Digital Currency Exchanged </p></h1>
                    </Col>
                    <Col>
                    <h1 data-Aos="fade-up" data-aos-duration="4000"  className='chart'><BsPersonCircle  size={50} style={{color: 'blue'}} /> 10M+</h1><p data-Aos="fade-up" data-aos-duration="4000"  className='Trust'>Trusted Wallet Investors</p>
                    </Col>
                    <Col>
                    <h1 data-Aos="fade-up" data-aos-duration="4000"  className='chart'><FaGlobeAmericas className='bar' size={50} style={{color: 'blue'}} />195</h1><p data-Aos="fade-up" data-aos-duration="4000"  className='Trust'>Countries Supported</p>
                    </Col>
                </Row>
            </Container>
            <Container className='about'>
                <Row xs={1} lg={2}>
                    <Col>
                    <img data-Aos="zoom-in" data-aos-duration="4000" className='img1' src={Why} />
                    </Col>
                    <Col>
                    <h1 data-Aos="fade-up" data-Aos-duration="4000" className='reason'>Why you should choose CRAPPO</h1><p data-Aos="fade-up" data-aos-duration="4000" className='exp'>Experience the next generation crypto currency  platform. No financial borders, extra fees and fake reviews.</p>
                    <Link data-Aos="fade-up" data-Aos-duration="4000" to='/' className='btn2'>Learn more</Link>
                    </Col>
                </Row>
            </Container>
            </div>
            

          
           
            <h1 data-Aos="fade-up" data-aos-duration="4000" className='check'>Check how much you can earn</h1><p data-Aos="fade-up" data-aos-duration="4000"  className='let'>Let’s check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.</p>
            <div data-Aos="zoom-in" data-aos-duration="4000" className='lastintro'>
            <Row>
                <Col className='calc2'>
                
            <input className='text' type="text" placeholder="Enter your hashrate" />
                </Col>
                <Col className='calc1'>
                <select className='text1' >
            <option disabled={true} value="">
              --Choose and option--
            </option>
            <option value="text"><input className='text' type="text" placeholder="Enter your hashrate" />TH/s</option>
            <option value="apple">H/s</option>
            <option value="banana">KH/s</option>
            <option value="kiwi">MH/s</option>
            <option value="kiwi">GH/s</option>
          </select>
    
                </Col>
                <Col className='calc'>
                <Link to='/' className='btn3'>Calculate</Link>
                </Col>
            </Row>
            </div>
            </div>
            <div data-Aos="zoom-in" data-aos-duration="4000" className='foot'>
                <p data-Aos="zoom-in" data-aos-duration="4000" className='estimate'>ESTIMATED 24 HOUR REVENUE:</p>
                <h1 data-Aos="zoom-in" data-aos-duration="4000" className='estimate1'>0.055 130 59 ETH($1275)</h1>
                <p data-Aos="zoom-in" data-aos-duration="4000" className='estimate3'>Revenue will change based on mining difficulty and Ethereum price.</p>
                <h2 data-Aos="zoom-in" data-aos-duration="4000"className='estimate4'>Trade securely and market the high growth<br /> cryptocurrencies.</h2>
               
            </div>
            <div className='rowe1'>
            <Row className='rowe'>
                    <Col xs={4} md={4}  className='cryptos'>
                        <div className='bruv' contenteditable tabindex="3">
                        <center><img src={Bitcoin} className='bitcoin'></img><h1 className='another'>Bitcoin</h1><p className='btc'>BTC</p>
                        <p className='btc1' contenteditable tabindex="3">Digital currency in which a record of transactions is maintained.</p>
                      <Link to='/' className='btn4'>Start mining<BsPlayCircleFill size={30} style={{color: '#fff'}} /></Link>
                        </center>
                        </div>
                       
                      
                    </Col>
                    <Col xs={4} md={4} className='cryptos1'>
                    <div className='bruv' contenteditable tabindex="3">
                        <center><img src={Bitcoin} className='bitcoin'></img><h1 className='another'>Ethereum</h1><p className='btc'>ETH</p>
                        <p className='btc1' contenteditable tabindex="3">Blockchain technology to create and run decentralized digital applications.</p>
                      <Link to='/' className='btn4'>Start mining<BsPlayCircleFill size={30} style={{color: '#fff'}} /></Link>
                        </center>
                        </div>
                       
                    </Col>
                    <Col xs={4} md={4} className='cryptos2'>
                    <div className='bruv' contenteditable tabindex="3">
                        <center><img src={Bitcoin} className='bitcoin'></img><h1 className='another'>Litecoin</h1><p className='btc'>LTC</p>
                        <p className='btc1' contenteditable tabindex="3">Cryptocurrency that enables instant payments to anyone in the world.</p>
                      <Link to='/' className='btn4'>Start mining<BsPlayCircleFill size={30} style={{color: '#fff'}} /></Link>
                        </center>
                        </div>
                       
                    </Col>
                </Row>
                
                <div className='footer'>
                    <div className='wow'>
                    <Container>
                   <h1  data-Aos="fade-up" data-aos-duration="4000" className='market'>Market sentiments, portfolio, and run the infrastructure of your choice</h1>
                    <Row>
                        <Col xs={12} md={12} lg={6}>
                        <h1  data-Aos="fade-up" data-aos-duration="4000" className='feature'>Invest Smart</h1>
                        <p  data-Aos="fade-up" data-aos-duration="4000" className='get'> Get full statistic information about the behaviour  of buyers and sellers will help you to make the decision. </p>
                        <Link  data-Aos="zoom-in" data-aos-duration="4000" to='/' className='btn5'>Learn more</Link>
    
                        </Col>
                        <Col xs={12} md={12} lg={6}>
                        <img  data-Aos="zoom-in" data-aos-duration="4000" src={Feature} className='featurei'></img>
                        </Col>
    
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={6}>
                        <img  data-Aos="zoom-in" data-aos-duration="4000"  src={Feature1} className='market1'></img>
                        </Col>
                        <Col xs={12} md={12} lg={6}>
                        <h1 data-Aos="fade-up" data-aos-duration="4000" className='feature1'>Detailed Statistics</h1>
                        <p data-Aos="fade-up" data-aos-duration="4000" className='get1'>View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.</p>
                        <Link data-Aos="zoom-in" data-aos-duration="4000" to='/' className='btn6'>Learn more</Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col  xs={12} md={12} lg={6} >
                        <h1 data-Aos="fade-up" data-aos-duration="4000" className='feature2'>Grow your profit and track your investments</h1>
                        <p data-Aos="fade-up" data-aos-duration="4000" className='get2'>Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.</p>
                        <Link data-Aos="zoom-in" data-aos-duration="4000" to='/' className='btn5'>Learn more</Link>
                        </Col>
                        <Col  xs={12} md={12} lg={6} >
                        <img data-Aos="zoom-in" data-aos-duration="4000" src={Feature2} className='featureimg'></img>
                        </Col>
    
                    </Row>
                </Container>
                <div data-Aos="zoom-in" data-aos-duration="4000" className='box'>
                    <Row>
                        <Col xs={12} md={5} lg={5}>
                        <h1 className='start'>Start mining now</h1>
                        <p className='join'>Join now with CRAPPO to get the latest news and start mining now</p>
                        </Col>
                        <Col xs={6} lg={4}>
                        <input className='text2' type="text" placeholder="Enter your email" /><Link xs={6} md={5} lg={4} to='/' className='btn7'>Subscribe</Link>
                        </Col>
                    </Row>
                </div>
    
                    </div>
             
                </div>
               
    
            </div>
          <div className='final'>
            <Container>
                <Row  data-Aos="zoom-in" data-aos-duration="4000"  >
                    <Col xs={12} md={12} lg={3}>
                    <Link className='crappo' to='/'><img className='logo' src={ReactLogo} alt="React Logo" /></Link>
                    </Col>
                    <Col xs={12} md={12} lg={3}>
                   <p  className='quick'>Quick Link</p>
                   <ul className='links'>
                   <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>Product</Link>
                </li>
                <li>
                    <Link to='/'>Features</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/'>Contact</Link>
                </li>

            </ul>
                    </Col>
                    <Col xs={12} md={12} lg={3} >
                    <p className='quick'>Resources</p>
                    <ul className='links'>
                <li>
                    <Link to='/'>Download Whitepaper</Link>
                </li>
                <li>
                    <Link to='/'>Smart Token</Link>
                </li>
                <li>
                    <Link to='/'>Blockchain Explorer</Link>
                </li>
                <li>
                    <Link to='/'>Crypto API</Link>
                </li>
                <li>
                    <Link to='/'>Interest</Link>
                </li>

            </ul>
                    </Col>
                    <Col xs={12} md={12} lg={3} >
                    <p className='quick1'>We accept following payment systems</p>
                    <Row>
                        <Col className='method'>
                        <FaCcVisa  size={40} style={{color: '#fff'}}  />
                        </Col>
                        <Col className='method'>
                        <FaCcMastercard size={40} style={{color: '#fff'}} />
                        </Col>
                        <Col className='method'>
                        <FaBitcoin size={40} style={{color: '#fff'}}  />
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
          </div>
    </div>
       
      )
  }
 


export default Intro