import React from 'react';
import "./staking.css";

export default function Staking() {
  return (
    <div className='staking-container'>
        <div className='overlay'></div>
        <div className='about-us-container'>
          <div className='about-intro'>
           <h1>BSC-LaunchPad</h1>
           <small> Launch carefully selected ventures and assist them in achieving success. BSC-LaunchPad is a cutting-edge launchpad and Defi platform. </small>
          </div>

          <div className='socials'>
            <div className='border-contain'>
              <i class="fa-brands fa-telegram"></i>
            </div>
            <div className='border-contain'>
              <i class="fa-brands fa-twitter"></i>
            </div>
            <div className='border-contain'>
              <i class="fa-brands fa-discord"></i>
            </div>
          </div>

        </div>
    </div>
  )
}
