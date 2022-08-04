import React from 'react';
import "./mainpage.css";
import Nav from "../nav/Nav";
import Typography from '@mui/material/Typography';
import rocket from "../../../src/img/rocketTwo.png"

export default function Mainpage() {
  return (
    <div  className='main-page'> 
        
        <div className='main-content'>

          <Nav className="App" />

          <div className='welcome-div'>
              <div className='div-one'>
                <Typography className='header-one' variant="h1" gutterBottom component="div">
                    Welcome to
                </Typography>
              </div>

              <div className='div-two'>
                  <Typography className='div-two-text' variant="body2" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis ,
                  </Typography>
                  <Typography className='header-one' variant="h1" gutterBottom component="div">
                    Space
                  </Typography>
              </div>

          </div>


          <div className='button-contain'>
            <button className='button'>Sponsors</button>
            <button className='button-2'>Find Us <i class="fa-brands fa-telegram"></i></button>
          </div>



          <div className='welcome-divTwo'>

            <div className='below-Content'>
                <Typography variant="h6" gutterBottom component="div">
                   Meet the crew
                </Typography>
                <Typography className='' variant="caption" gutterBottom>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It
                </Typography>


                <div className='socials'>
                    <div className='border-contain'>
                      <i  className="fa-brands fa-telegram isocials"></i>
                    </div>
                    <div className='border-contain'>
                      <i class="fa-brands fa-twitter isocials"></i>
                    </div>
                    <div className='border-contain'>
                       <i class="fa-brands fa-discord isocials"></i>
                    </div>
                </div>

            </div>



          </div>

          


              <img className='img' src={rocket} alt="rocket image" />








        </div>

  </div>
  )
}
