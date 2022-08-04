import React from 'react';
import "./pool.css";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import style from 'styled-components'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  background: '#222222',
  color: '#F5F5F5',
  height: 100,
  width: 220,
  lineHeight: '60px',
  borderRadius: '0px',
  border:' 0.5px solid #000'
}));


const Contain = style.div`
display: flex;
align-items: center;
justify-content: center
`



export default function Partners() {
  return (
    <div className='pool-container'>
      <div className='overlay'></div>
      <div className='pool-view-info'>
        <div className='text-info'>
        <h1> A State-of-the-Art Launchpad </h1>
        <p>Burning Moon initiatives are carefully selected through vetting, which considers the project teams' origins to their legality and execution capabilities.</p>
        </div>

        <div className='text-info-two'>
          <div className='info-projects-data'>
            <h3>40+</h3>
            <small>IDO projects</small>
          </div>
          <div className='info-projects-data'>
            <h3>$40,000</h3>
            <small>Funds</small>
          </div>
          <div className='info-projects-data'>
            <h3>150</h3>
            <small>successfull projects</small>
          </div>
        </div>

        <div className='text-info-three'>
          <p>Reliability is our second name</p>
        </div>
      </div>


       <div className='hold-partners-logo'>

        <Contain item xs={6} >
                <Item elevation="2">
                  Partner 1
                </Item>

                <Item >
                  Partner 2
                </Item>

                <Item >
                  Partner 3
                </Item>

                <Item >
                  Partner 4
                </Item>
        </Contain> 
        <Contain item xs={6} >
                <Item elevation="2">
                  Partner 5
                </Item>

                <Item >
                  Partner 6
                </Item>

                <Item >
                  Partner 7
                </Item>

                <Item >
                  Partner 8
                </Item>
        </Contain> 
        <Contain item xs={6} >
                <Item elevation="2">
                  Partner 9
                </Item>

                <Item >
                  Partner 10
                </Item>

                <Item >
                  Partner 11
                </Item>

                <Item >
                  Partner 12
                </Item>
        </Contain> 
        <Contain item xs={6} >
                <Item elevation="2">
                  Partner 13
                </Item>

                <Item >
                  Partner 14
                </Item>

                <Item >
                  Partner 15
                </Item>

                <Item >
                  Partner 16
                </Item>
        </Contain> 
        <Contain item xs={6} >
                <Item elevation="2">
                  Partner 17
                </Item>

                <Item >
                  Partner 18
                </Item>

                <Item >
                  Partner 19
                </Item>

                <Item >
                  Partner 20
                </Item>
        </Contain> 
      
        </div>
    </div>
  )
}
