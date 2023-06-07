import React, {useState}from 'react';
import '../Styles/FAQ.css'
import Footer from './Footer';
import Book from './Book';
import Bl from '../assets/Line 59.png'

import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'





function FAQ(){
    const [show, setShow]= useState(false)
    const showLess=()=>{
        setShow(!show)
    }
    const [drop, setDrop] = useState(false)
    const dropDown=()=>{
        setDrop(!drop)
    }
    const [drop1, setDrop1] = useState(false)
    const dropDown1=()=>{
        setDrop1(!drop1)
    }
    const [drop2, setDrop2] = useState(false)
    const dropDown2=()=>{
        setDrop2(!drop2)
    }
    const [drop3, setDrop3] = useState(false)
    const dropDown3=()=>{
        setDrop3(!drop3)
    }
    const [drop4, setDrop4] = useState(false)
    const dropDown4=()=>{
        setDrop4(!drop4)
    }
    const [drop5, setDrop5] = useState(false)
    const dropDown5=()=>{
        setDrop5(!drop5)
    }
    return(
        <div>
            <div className='faq-parent-one'>
                <div className='faq-one'>
                    <div>
                        <h3>FAQ</h3>
                        <h1>What do people usually ask?</h1>
                        <p>We Will Open The World Of Knowledge For You! This is the latest online examination system you will ever need! </p>
                    </div>
                </div>
            </div>
            <div className='faq-two-grand'>
                <div className='faq-two-parent'>
                    <div className='faq-two'>
                        <div className='faq-two-sub' onClick={dropDown}>
                            <div className='f-one'>
                                <p>What is Exam Africa</p>
                                {show? <IoIosArrowUp className='' onClick={showLess}/>
                                :
                                <IoIosArrowDown className='' onClick={showLess}/>
                                }
                            </div>
                           {drop &&  <div className='f-one-sub'>
                                <p>Exams Africa is a platform designed to help Africans prepare prepare for exams.<br/> We offer a comprehensive collection of past exam questions from a wide range of <br/> subjects, allowing users to test their knowledge and improve their skills.</p>
                            </div>}
                        </div>
                        <div  className='faq-two-sub' onClick={dropDown1}>
                            <div className='f-one'>
                                <p>Who can use Exam Africa</p>
                                {show? <IoIosArrowUp className='' onClick={showLess}/>
                                :
                                <IoIosArrowDown className='' onClick={showLess}/>
                                }
                            </div>
                           {drop1 &&  <div className='f-one-sub'>
                                <p>Exams Africa is designed for anyone who is looking to practise for upcoming <br/> exams. This includes students preparing for high school or college exams, as well <br/> as professionals looking to advance their careers.</p>
                            </div>}
                        </div>
                    </div>
                    <div className='faq-two'>
                        <div  className='faq-two-sub' onClick={dropDown2}>
                            <div className='f-one'>
                                <p>What subjects are covered on Exams Africa</p>
                                {show? <IoIosArrowUp className='' onClick={showLess}/>
                                :
                                <IoIosArrowDown className='' onClick={showLess}/>
                                }
                            </div>
                           {drop2 &&  <div className='f-one-sub'>
                                <p>Our platform offers exam questions from a variety of subjects, including math,<br/> science, English, and history. We are constantly updating our collection to ensure<br/>that we have the most current and relevant exam questions available.</p>
                            </div>}
                        </div>
                        <div  className='faq-two-sub' onClick={dropDown3}>
                            <div className='f-one'>
                                <p>Is Exams Africa free to use?</p>
                                {show? <IoIosArrowUp className='' onClick={showLess}/>
                                :
                                <IoIosArrowDown className='' onClick={showLess}/>
                                }
                            </div>
                            {drop3 && <div className='f-one-sub'>
                                <p>Exams.Africa isn't free but comes with a reasonable subscription module. We  <br/>believe that everyone should have access to the resources they need to succeed,  <br/>regardless of their financial situation.</p>
                            </div>}
                        </div>
                    </div>
                    <div className='faq-two'>
                        <div  className='faq-two-sub' onClick={dropDown4}>
                            <div className='f-one'>
                                <p>Can I track my progress on Exams Africa</p>
                                {show? <IoIosArrowUp className='' onClick={showLess}/>
                                :
                                <IoIosArrowDown className='' onClick={showLess}/>
                                }
                            </div>
                            {drop4 && <div className='f-one-sub'>
                                <p>Yes, our platform includes a tracking system that allows users to monitor their  <br/>progress and identify areas where they need to improve. This allows users to  <br/>focus their studying and maximize their exam performance.</p>
                            </div>}
                        </div >
                        <div  className='faq-two-sub' onClick={dropDown5}>
                            <div className='f-one'>
                                <p>Is Exams Africa availabe on mobile devices</p>
                                <div className='ani'>{show? <IoIosArrowUp className='' onClick={showLess}/>
                                :
                                <IoIosArrowDown className='' onClick={showLess}/>
                                }</div>
                            </div>
                            {drop5 && <div className='f-one-sub'>
                                <p>Yes, our platform is fully mobile-responsive and you can also download our mobile <br/> app, allowing users to access and use it on their smartphones and tablets. This  <br/>makes it easy to practise for exams on the go, anytime, anywhere.</p>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
                <div className='faq-last'>
                <h3>Get Every Latest News Feed</h3>
                <img src={Bl} alt="" />
                </div>
            <Book/>
            <Footer/>
        </div>
    )
}
export default FAQ;