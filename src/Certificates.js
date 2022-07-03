import React from 'react'
import './Certificates.css'
let state = 0
const states = [0,1,2]

function Certificates() {
    const previousButton = function() {
        state--;
        if(state === -1){
            state = 2;
        }
        for(let i=0; i<states.length; i++){
            if(i === state){
                document.getElementById(''+ state).classList.remove('invisible');
            }else{
                document.getElementById(''+ i).classList.add('invisible');
            }
        }
    }

    const nextButton = function() {
        // document.getElementById('certificates-content').classList.add('slide-animation');
        state++;
        if(state === 3){
            state = 0;
        }
        for(let i=0; i<states.length; i++){
            if(i === state){
                document.getElementById(''+ state).classList.remove('invisible');
            }else{
                document.getElementById(''+ i).classList.add('invisible');
            }
        }
    }
  return (
    <div className='certificates'>
        <p>Certificates</p>
        <div id='certificates-container'>
            <div className='certificates-content'>
                <p id='0' className='certificate'>日本語能力試験N2</p>
                <p id='1' className='certificate invisible'>TOEIC L&R 730/990点</p>
                <p id='2' className='certificate invisible'>TOEIC S&W 280/400点</p>
            </div>
            <div className='control-button'>
                <button className="previous round" onClick={previousButton}>&#8249;</button>
                <button className="next round" onClick={nextButton}>&#8250;</button>
            </div>
        </div>
    </div>
  )
}

export default Certificates