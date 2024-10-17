import React from 'react';

const MainSection = () => {
    return (
        <>
        <div className="s2header">
            <h4 className='poppins-extralight white-text'>IT&apos;S TIME TO GET</h4>
            <h1 className='poppins-bold white-text uppercase'>Swole<span className='poppins-bold colored-text uppercase'>normous</span></h1>   
        </div>
        <div className="container">
            <div className='main' id='main'>
                <p className='white-text'>I hereby acknowledgement that I may become <span className='colored-text'>unbelievably swolenormous</span> and accept all
                    risks of becoming the local <span className='colored-text'>mass montrosity</span>, afflicted with severe body dismorphia,
                    unable to fit through doors.</p>   
                <button
                onClick={()=>{
                    window.location.href = '#section2';
                }}
                className='btn-accept'>Accept & Begin</button>           
            </div>
        </div>


        </>
    );
};

export default MainSection;