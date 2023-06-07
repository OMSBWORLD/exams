import React from 'react';
import '../Styles/ContactUs.css'
import Footer from './Footer';
import icon from '../assets/Icon Artwork.png';
import { Link } from 'react-router-dom';
import {MdLocationOn} from 'react-icons/md'
import {FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF,} from 'react-icons/fa'





function ContactUs(){
    return(
        <div>
             <div className='blog-parent-one'>
                <div className='blog-one'>
                    <div>
                        <h3>Support</h3>
                        <h1>How can we help you?</h1>
                        <p>We Will Open The World Of Knowledge For You! This is the latest online examination system you will ever need! </p>
                    </div>
                </div>
            </div>
            <div className='contact-two-grand'>
            <div className='contact-two-parent'> 
                <div className='contact-two-one'>
                    <div>
                        <h1>Contact Us</h1>
                        <p className='wale'>We Will Open The World Of Knowledge For You! This is the latest online examination system you will ever need! </p>
                    </div>
                    <div className='contact-two-sub2'>
                        <div className='sub2'>
                            <div>
                            <h4>Head Office</h4>
                            <p>17/18 Folabi Baker street</p> Agungi, Lekki, Lagos Nigeria
                            <div className='location'><MdLocationOn/> <p >Get directions</p></div>
                            <p>+234 4863 33773E</p>xamsafricainfo.com
                            </div>
                            <Link to='https://www.linkedin.com/company/exams-africa/'><FaLinkedinIn/></Link>
                            <Link to='https://www.instagram.com/examsafrica/'><FaTwitter/></Link>
                            <Link to='https://exams.africa/#0'><FaInstagram/></Link>
                            <Link to='https://exams.africa/#0'><FaFacebookF/></Link>
                        </div>
                    </div>
                </div>
                <div className='contact-two-two'>
                    <div>  
                        <div  className='contact' >
                           <div className='one' id='one'>
                                <label>Name</label>
                                <input type="text" placeholder='Garba Garba' />
                           </div>
                            <div className='one' id='one'>
                                <label>Email Address</label>
                                <input type="email" placeholder='grababegd@gmail.com'/>
                            </div>
                        </div>
                        <div >
                            <div className='one'>
                                <label>Subject</label>
                                <input type="text" placeholder='Can’t find a subject'/>
                            </div>
                           <div className='one'>
                                <label>How can we help you?</label>
                                <textarea placeholder='I need to study for a hausa exam and i can’t find the course'/>
                           </div>
                        </div>
                    </div>
                    <div className='contact-butt'><button style={{background:'#002099', color: '#f8ecd7'}}>send message <img src={icon} alt="" /></button></div>
                </div>
            </div>
            </div>
            <div className='contact-last-parent'>
                <div className='contact-last'>
                    <div>
                        <h3>Need specific help?</h3>
                        <p>Visit our frequently asked questions section here or make use our social media platforms<br/> to get in contact with us. Click on any of the social media icons to be redirected.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default ContactUs;