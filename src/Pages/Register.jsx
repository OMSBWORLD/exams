import React, {useState}from 'react';
import '../Styles/Register.css'
import home from '../assets/exams2.png';
import { Link } from 'react-router-dom';
import left from '../assets/left.png'
import right from '../assets/right.png'
import Number from './Number';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'



function Register(){
    const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

    return(
        <div>
            <div className='s-nav-parent'>
                <div className='s-nav'>
                    <div className='nav-one'><Link to='/'><img src={home}/></Link></div>
                    <div>Already have an account? Login<Link to='/login'> here</Link>  </div>
                </div>
            </div>
            <div className='sign-parent'>
                <div className='sign'>
                    <div className='sign-one'>
                        <h1>Create An Account</h1>
                    </div>
                    <div className='sign-two'>
                        <div className='sign-sub-one'>
                            <div className='name'>
                                <div className='log-one'>
                                    <label>First Name</label>
                                    <input type="text" />
                                </div>
                                <div className='log-one'>
                                    <label>Last Name</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='log-one'>
                                <label>Username</label>
                                <input type="text" />
                            </div>
                            <div className='log-one'>
                                <label>Email Adrees</label>
                                <input type="email" />
                            </div>
                            
                            <div className='log-one'>
                                <label>Mobile Number</label>
                                {/* <input type="number" /> */}
                                <Number/>
                            </div>
                            <div className='password'>
                                <div className='log-one'>
                                    <label>Password</label>
                                    <input type='password'/><span className='span1'><AiOutlineEyeInvisible/></span>
                                    {/* <div className="input-container">
                                        <input type={passwordVisible ? 'text' : 'password'}  />
                                        {passwordVisible ? (
                                        <AiOutlineEyeInvisible onClick={togglePasswordVisibility} />
                                        ) : (
                                        <AiOutlineEye onClick={togglePasswordVisibility} />
                                    )}
                                    </div> */}
                                </div>
                                <div className='log-one'>
                                    <label>Confirm Password</label>
                                    <input type='password'/><span className='span2'><AiOutlineEyeInvisible/></span>
                                    {/* <div className="input-container">
                                        <input type={passwordVisible ? 'text' : 'password'}  />
                                        {passwordVisible ? (
                                        <AiOutlineEyeInvisible onClick={togglePasswordVisibility} />
                                        ) : (
                                        <AiOutlineEye onClick={togglePasswordVisibility} />
                                    )}
                                    </div> */}
                                </div>
                            </div>
                            <button style={{color: '#ffffff', background: '#1178FF', border: 'none',}}> Login</button>
                        </div>
                        <div className='sign-sub-two'>
                            <img src={right} alt="" /><img src={left} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;