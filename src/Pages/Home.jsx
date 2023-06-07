import React from 'react';
import '../Styles/Home.css'
import { Link } from 'react-router-dom';
import e1 from '../assets/1.png';
import e2 from '../assets/2.png';
import exams4 from '../assets/exams4.png';
import exams6 from '../assets/exams6.png';
import exams7 from '../assets/exams7.png';
import exams8 from '../assets/exams8.png';
import exams9 from '../assets/exams9.png';
import Footer from './Footer';
import vid from '../assets/Examsafrica web.mp4'
import {RxDashboard} from 'react-icons/rx'
import {TbNotebook} from 'react-icons/tb'
import {TbActivityHeartbeat} from 'react-icons/tb'
import {AiOutlineDollarCircle} from 'react-icons/ai'
import {TbWorld} from 'react-icons/tb'
import {BsApple} from 'react-icons/bs'
import {BsGooglePlay,} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'
import {FaWhatsapp} from 'react-icons/fa'






function Home(){
    return(
        <div className='home-main'>
            <div className='home-grand-one'>
                <div className='home-parent-one'>
                    <div className='home-one-one'>
                        <div className='p-p'>
                            <div className='pra'> <h1>Practice</h1> <img src={e1} alt="" /> </div>
                            <div className='pre'> <img src={e2} alt="" /> <h1>Prepare</h1></div>
                        </div>
                        <div className='exel-head'>
                            <div className=''><h1>Excel</h1></div>
                            <div className='b-p'>
                                <div className='b1'><button style={{width: '105px' , height: '60px'}}>JAMB -<br/> UTME</button><button style={{width: '105px', height: '60px'}}>WAEC -<br/>  SSCE</button><button style={{width: '105px' , height: '60px'}}>WAEC -<br/>  GCE</button></div>
                                <div className='b2'><button style={{width: '210px' , height: '60px'}}>COMMON ENTRANCE <br/>  EXAM</button><button style={{width: '105px', height: '60px'}}>NECO</button></div>
                            </div>
                        </div>
                        <div className='home-p'>
                            <p >Welcome to the Exams.Africa, Exams Africa is a platform designed specifically for Africans looking to practise for upcoming exams. Our platform offers a comprehensive collection of past exam questions from a wide range of subjects, allowing users to test their knowledge and improve their skills.</p>
                        </div>
                        <div className='home-one-bottom'>
                        <Link to='/register'><button style={{background: '#002099',color: '#ffffff', width: '160px', height:'45px', border: 'none',}}>Get Started </button> </Link>
                        <Link to='/login'><button style={{background: '#ffffff',color: '#002099', width: '160px', height: '45px',  border: '3px solid #002099'}}>Start Practising</button> </Link>
                        </div>
                    </div>
                    <div className='home-one-two'>
                    <img src={exams4}/>
                    </div>
                </div>
            </div>
            <div className='home-two'>
                <div className='home-two-sub'>
                        <div className='home-two-sub-sub'>
                            <div id='sub-sub'>
                                <RxDashboard/>
                                <h3>Past questions</h3>
                            </div>
                            <div  className='sub-sub'>
                                <p>Thousands of past questions</p>
                            </div>
                        </div>
                        <div  className='home-two-sub-sub' id='sub'>
                            <div id='sub-sub'>
                                <TbNotebook/>
                                <h3>Mock Exams</h3>
                            </div>
                            <div  className='sub-sub'> 
                                <p>Mock examination feature</p>
                            </div>
                        </div>
                        <div  className='home-two-sub-sub' id='sub'>
                            <div id='sub-sub'>
                                <TbActivityHeartbeat/>
                                <h3>Track activity</h3>
                            </div>
                            <div  className='sub-sub'>
                                <p>Dashboard to track all activities</p>
                            </div>
                        </div>
                        <div  className='home-two-sub-sub' id='sub'>
                            <div id='sub-sub1'>
                                <AiOutlineDollarCircle/>
                                <h3>Affordable</h3>
                            </div>
                            <div className='sub-sub'>
                                <p>Low cost on in-app purchases</p>
                            </div>
                        </div>
                </div>
            </div>
            <div className='lab'>
                <h3>Now you have no reason to fail</h3>
            </div>
            <div className='home-grand-three'>
                <div className='home-parent-three'>
                    <div className='three-one'>
                        <div><img src={exams6}/></div>
                        <div className='words'>
                            <h3>Choose Your Category</h3>
                            <p>Choose the exam category based on your subject.This helps you differentiate between subjects that are essential for studying a particular course and subjects.</p>
                            <div className='linee'></div>
                        </div>
                    </div>
                    <div className='three-two'>
                        <div className='words'>
                            <h3>Select Preferable Subject</h3>
                            <p>The aim of this to help you see things more clearly and get a good impression of the possible options, whether you have your heart set on a particular career path or not.</p>
                            <div className='linee'></div>
                        </div>
                        <div><img src={exams7}/></div>
                    </div>
                    <div className='three-three'>
                        <div><img src={exams8}/></div>
                        <div className='words'>
                            <h3>Attend Examination</h3>
                            <p>Through our activities and technology, we are able to provide reliable data across several African products.</p>
                            <div className='linee'></div>
                        </div>
                    </div>
                    <div className='three-four'>
                        <div className='words'>
                            <h3>Select Preferable Subject</h3>
                            <p>The aim of this to help you see things more clearly and get a good impression of the possible options, whether you have your heart set on a particular career path or not.</p>
                            <div className='linee'></div>
                        </div>
                        <div><img src={exams9}/></div>
                    </div>
                </div>
            </div>
            <div className='home-four'>
                <h1>Available on These platforms</h1>
                <div className='home-four-sub'>
                        <div className='home-four-sub-sub'>
                            <div id='four-sub-sub'>
                                <TbWorld/>
                            </div>
                            <div  className='four-sub-sub'>
                             <h3>Web</h3>
                                <Link  to='/register'><p>Get Started</p></Link>
                            </div>
                        </div>
                        <div  className='home-four-sub-sub' id='four-sub'>
                            <div id='four-sub-sub'>
                                <BsApple/>
                            </div>
                            <div  className='four-sub-sub'> 
                                <h3>App Store</h3>
                                <Link><p>Download Now</p></Link>
                            </div>
                        </div>
                        <div  className='home-four-sub-sub' id='four-sub'>
                            <div id='four-sub-sub'>
                                <BsGooglePlay/>
                            </div>
                            <div  className='four-sub-sub'>
                                <h3>Play store</h3>
                                <Link to='https://play.google.com/store/apps/details?id=com.exams_africa&pli=1'><p>Download Now</p></Link>
                            </div>
                        </div>
                        <div  className='home-four-sub-sub' id='four-sub'>
                            <div id='four-sub-sub'>
                                <BsTelegram/>
                            </div>
                            <div className='four-sub-sub'>
                                <h3>Telegram </h3>
                                <Link><p>Coming soon</p></Link>
                            </div>
                        </div>
                        <div  className='home-four-sub-sub' id='four-sub'>
                            <div id='four-sub-sub'>
                                <FaWhatsapp/>
                            </div>
                            <div className='four-sub-sub'>
                                <h3>Whatsapp</h3>
                                <Link><p>Coming soon</p></Link>
                            </div>
                        </div>
                </div>
            </div>
            <div  className='home-five'>
                <h1>Use the Exam.Africa Platform the right way</h1>
                <p>Learn the essential ways to successfully maximize the Platform for a exam success.</p>
            </div>
            <div className='video'>
                <video src={vid} controls />
            </div>
            <Footer/>
        </div>
    )
}
export default Home;