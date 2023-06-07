import React from 'react';
import '../Styles/Book.css'
import book from '../assets/book.png';
import icon from '../assets/Icon Artwork.png'


function Book(){
    return(
        <div>
                <div className='middle-parent'> 
                <div className='middle'>
                    <div className='middle-sub'>
                        <div>
                            <div className='b-img'><img src={book} alt="" /></div>
                            <h3>Examination Preparations</h3>
                            <p>Start your revision early. There is no substitute for starting early with <br/>revision. You need to give yourself enough time to review everything<br/> that you have studied, and make sure that.......</p>
                            <button style={{background:'#1178ff', color: '#f8ecd7'}}>View This Article <img src={icon} alt="" /></button>
                        </div>
                        <div>
                            <div className='b-img'><img src={book} alt="" /></div>
                            <h3>Examination Preparations</h3>
                            <p>Start your revision early. There is no substitute for starting early with <br/>revision. You need to give yourself enough time to review everything<br/> that you have studied, and make sure that.......</p>
                            <button style={{background:'#1178ff', color: '#f8ecd7'}}>View This Article <img src={icon} alt="" /></button>
                        </div>
                    </div>
                    <div className='middle-sub'>
                        <div>
                            <div className='b-img'><img src={book} alt="" /></div>
                            <h3>Examination Preparations</h3>
                            <p>Start your revision early. There is no substitute for starting early with <br/>revision. You need to give yourself enough time to review everything<br/> that you have studied, and make sure that.......</p>
                            <button style={{background:'#1178ff', color: '#f8ecd7'}}>View This Article <img src={icon} alt="" /></button>
                        </div>
                        <div>
                            <div className='b-img'><img src={book} alt="" /></div>
                            <h3>Examination Preparations</h3>
                            <p>Start your revision early. There is no substitute for starting early with <br/>revision. You need to give yourself enough time to review everything<br/> that you have studied, and make sure that.......</p>
                            <button style={{background:'#1178ff', color: '#f8ecd7'}}>View This Article <img src={icon} alt="" /></button>
                        </div>
                    </div>
                    <div  className='middle-sub'>
                        <div>
                            <div className='b-img'><img src={book} alt="" /></div>
                            <h3>Examination Preparations</h3>
                            <p>Start your revision early. There is no substitute for starting early with <br/>revision. You need to give yourself enough time to review everything<br/> that you have studied, and make sure that.......</p>
                           <button style={{background:'#1178ff', color: '#f8ecd7'}}>View This Article <img src={icon} alt="" /></button>
                        </div>
                        <div>
                            <div className='b-img'><img src={book} alt="" /></div>
                            <h3>Examination Preparations</h3>
                            <p>Start your revision early. There is no substitute for starting early with <br/>revision. You need to give yourself enough time to review everything<br/> that you have studied, and make sure that.......</p>
                            <button style={{background:'#1178ff', color: '#f8ecd7'}}>View This Article <img src={icon} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Book;