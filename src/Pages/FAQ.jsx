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
    const [show1, setShow1]= useState(false)
    const showLess1=()=>{
        setShow1(!show1)
    }
    const [show2, setShow2]= useState(false)
    const showLess2=()=>{
        setShow2(!show2)
    }
    const [show3, setShow3]= useState(false)
    const showLess3=()=>{
        setShow3(!show3)
    }
    const [show4, setShow4]= useState(false)
    const showLess4=()=>{
        setShow4(!show4)
    }
    const [show5, setShow5]= useState(false)
    const showLess5=()=>{
        setShow5(!show5)
    }
    const [expanded, setExpanded] = React.useState(false);

    const toggleAccordion = () => {
      setExpanded(!expanded);
    };
    const [expanded1, setExpanded1] = React.useState(false);

    const toggleAccordion1 = () => {
      setExpanded1(!expanded1);
    };
    const [expanded2, setExpanded2] = React.useState(false);

    const toggleAccordion2 = () => {
      setExpanded2(!expanded2);
    };
    const [expanded3, setExpanded3] = React.useState(false);

    const toggleAccordion3 = () => {
      setExpanded3(!expanded3);
    };
    const [expanded4, setExpanded4] = React.useState(false);

    const toggleAccordion4 = () => {
      setExpanded4(!expanded4);
    };
    const [expanded5, setExpanded5] = React.useState(false);

    const toggleAccordion5 = () => {
      setExpanded5(!expanded5);
    };

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
                <div className=''>
                <div className='new-one-parent'>
                    <div className='new-one'>
                    <div className={`accordion-item ${expanded ? 'expanded' : ''}`}>
                        <h2 className="accordion-header">
                            <button
                            type="button"
                            aria-expanded={expanded}
                            className={`accordion-button ${expanded ? 'expanded' : ''}` }
                            onClick={toggleAccordion}  id='wd'
                            >
                            What is Exam Africa
                            {show? <IoIosArrowUp className='' onClick={showLess}/>
                                :
                                <IoIosArrowDown className='' onClick={showLess}/>
                                }
                            </button>
                            </h2>
                        <div className={`accordion-collapse ${expanded ? 'show' : ''}`} >
                            <div className="accordion-body">
                            Exams Africa is a platform designed to help Africans prepare prepare for exams. We offer a comprehensive collection of past exam questions from a wide range of  subjects, allowing users to test their knowledge and improve their skills.
                            </div>
                        </div>
                    </div>
                    <div className={`accordion-item ${expanded1 ? 'expanded' : ''}`}>
                        <h2 className="accordion-header">
                            <button
                            type="button"
                            aria-expanded={expanded1}
                            className={`accordion-button ${expanded1 ? 'expanded' : ''}`}
                            onClick={toggleAccordion1} id='wd'
                            >
                            Who can use Exam Africa
                            {show1? <IoIosArrowUp className='' onClick={showLess1}/>
                                :
                                <IoIosArrowDown className='' onClick={showLess1}/>
                                }
                            </button>
                            </h2>
                        <div className={`accordion-collapse ${expanded1 ? 'show' : ''}`}>
                            <div className="accordion-body">
                            Exams Africa is designed for anyone who is looking to practise for upcoming  exams. This includes students preparing for high school or college exams, as well  as professionals looking to advance their careers.
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='new-one'>
                    <div className={`accordion-item ${expanded2 ? 'expanded' : ''}`}>
                        <h2 className="accordion-header">
                            <button
                            type="button"
                            aria-expanded={expanded2}
                            className={`accordion-button ${expanded2 ? 'expanded' : ''}` }
                            onClick={toggleAccordion2}  id='wd'
                            >
                            What subjects are covered on Exams Africa
                            {show2? <IoIosArrowUp className='' onClick={showLess2}/>
                                :
                                <IoIosArrowDown className='' onClick={showLess2}/>
                                }
                            </button>
                            </h2>
                        <div className={`accordion-collapse ${expanded2 ? 'show' : ''}`} >
                            <div className="accordion-body">
                            Our platform offers exam questions from a variety of subjects, including math, science, English, and history. We are constantly updating our collection to ensure that we have the most current and relevant exam questions available.
                            </div>
                        </div>
                    </div>
                    <div className={`accordion-item ${expanded3 ? 'expanded' : ''}`}>
                        <h2 className="accordion-header">
                            <button
                            type="button"
                            aria-expanded={expanded3}
                            className={`accordion-button ${expanded3 ? 'expanded' : ''}`}
                            onClick={toggleAccordion3} id='wd'
                            >
                            Is Exams Africa free to use?
                            {show3? <IoIosArrowUp className='' onClick={showLess3}/>
                                :
                                <IoIosArrowDown className='' onClick={showLess3}/>
                                }
                            </button>
                            </h2>
                        <div className={`accordion-collapse ${expanded3 ? 'show' : ''}`}>
                            <div className="accordion-body">
                            Exams.Africa isn't free but comes with a reasonable subscription module. We  believe that everyone should have access to the resources they need to succeed,  regardless of their financial situation.
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='new-one'>
                    <div className={`accordion-item ${expanded4 ? 'expanded' : ''}`}>
                        <h2 className="accordion-header">
                            <button
                            type="button"
                            aria-expanded={expanded4}
                            className={`accordion-button ${expanded4 ? 'expanded' : ''}`}
                            onClick={toggleAccordion4} id='wd'
                            >
                           Can I track my progress on Exams Africa
                           {show4? <IoIosArrowUp className='' onClick={showLess4}/>
                                :
                                <IoIosArrowDown className='' onClick={showLess4}/>
                                }
                            </button>
                            </h2>
                        <div className={`accordion-collapse ${expanded4 ? 'show' : ''}`}>
                            <div className="accordion-body">
                            Yes, our platform includes a tracking system that allows users to monitor their  progress and identify areas where they need to improve. This allows users to  focus their studying and maximize their exam performance.
                            </div>
                        </div>
                    </div>
                    <div className={`accordion-item ${expanded5 ? 'expanded' : ''}`}>
                        <h2 className="accordion-header">
                            <button
                            type="button"
                            aria-expanded={expanded5}
                            className={`accordion-button ${expanded5 ? 'expanded' : ''}`}
                            onClick={toggleAccordion5} id='wd'
                            >
                            Is Exams Africa availabe on mobile devices
                            {show5? <IoIosArrowUp className='' onClick={showLess5}/>
                                :
                                <IoIosArrowDown className='' onClick={showLess5}/>
                                }
                            </button>
                            </h2>
                        <div className={`accordion-collapse ${expanded5 ? 'show' : ''}`}>
                            <div className="accordion-body">
                            Yes, our platform is fully mobile-responsive and you can also download our mobile  app, allowing users to access and use it on their smartphones and tablets. This  makes it easy to practise for exams on the go, anytime, anywhere.
                            </div>
                        </div>
                    </div>
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