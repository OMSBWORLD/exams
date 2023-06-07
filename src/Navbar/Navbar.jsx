import React, {useState}from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import home from '../assets/exams2.png';
import {GoThreeBars} from 'react-icons/go'
import {FaRegTimesCircle} from 'react-icons/fa'


function Navbar(){
    const [mobile, setMobile]= useState(false)
    const handleMobile=()=>{
        setMobile(!mobile)
    }
    const handleClose=()=>{
        setMobile(false)
    }
    return(
        <div className='nav-grand'>
        <div className='nav-parent'>
            <div className='nav-one'><Link to='/'><img src={home}/></Link></div>
            <div className= {mobile ? 'mobile-link' : 'nav-two'}>
            <div className='nav-two-one'>
                <Link to='/blog' onClick={handleClose}>Blog</Link>
                <Link to='/faq' onClick={handleClose}>FAQ</Link>
                <Link to='/contact' onClick={handleClose}>Contact Us</Link>
            </div>
            <div className='nav-two-two'>
                <Link to='/register' onClick={handleClose}><button style={{background: '#1178ff',color: '#ffffff', width: '80px', height:'30px', border: 'none'}}>Register</button> </Link>
                <Link to='/login' onClick={handleClose}><button style={{background: '#ffffff',color: '#1178ff', width: '80px', height: '30px',  border: '2px solid #1178ff'}}>Log In</button> </Link>
            </div>
            </div>
            <div className='menu-bars'>
                {mobile? <FaRegTimesCircle className='times' onClick={handleMobile}/>
                :
                <GoThreeBars className='bars' onClick={handleMobile}/>
                }
            </div>
        </div>
        </div>
    )
}
export default Navbar;