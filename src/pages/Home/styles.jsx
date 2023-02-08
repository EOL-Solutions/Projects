import styled, { css } from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'
import { fadeInAnimation } from './animations'
export const Banner = styled.section`
  display: grid;
  width: 100%;
  position: relative;
  
  .render{
    width: 100%;
    height: 500px;
    left: 0;
    top: 0;
  }
  ${ResponsiveTo('lg')}{
    place-content: center;
    align-items: center;
    width: 100%;
    grid-template-columns: 1fr 1fr;
  }
  ${ResponsiveTo('xl')}{
  }
`

export const BaseLeft = styled.div`
  width: 0; 
  height: 0; 
  border-left: 100vw solid #5289B5;
  border-top: 50px solid transparent;
  position: absolute;
  top:-50px;
  ${props => props.color && css`
     border-left: 100vw solid ${props.color}};
  `}
`
export const BaseRight = styled.div`
  width: 0;
  height: 0; 
  border-right: 100vw solid #1F3541;
  border-top: 50px solid transparent;
  position: absolute;
  top:-50px;
  ${props => props.color && css`
     border-left: 100vw solid ${props.color}};
  `}
`
export const BotBaseLeft = styled.div`
  width: 0;
  height: 0; 
  border-left: 100vw solid #1F3541;
  border-bottom: 50px solid transparent;
  position: absolute;
  bottom: -50px;
  ${props => props.color && css`
     border-left: 99vw solid ${props.color}};
  `}
`
export const BotBaseRight = styled.div`
  width: 0;
  height: 0; 
  border-right: 100vw solid #1F3541;
  border-bottom: 50px solid transparent;
  position: absolute;
  bottom: -50px;
  ${props => props.color && css`
     border-right: 100vw solid ${props.color}};
  `}
`

export const Section1 = styled.section`
  margin: 50px 0;
  height: 400px;
  background-color: #5289B5;
  position: relative;
  margin-top: -50px;
  h2{
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  .image{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 3px 3px 20px 0px rgba(0,0,0,0.4);
    
  }
  .grid-2{
    display: grid;
    grid-template-columns: 2fr 80px;
    gap: 20px;
    align-items: center;
    align-content: center;
    ${fadeInAnimation({ time: '3s' })}
  }
  ${ResponsiveTo('lg')}{
    height: 440px;
    .grid-2{
      grid-template-columns: 2fr 200px;
    }
    .image{
      width: 200px;
      height: 200px;
    }
  }
  ${ResponsiveTo('xl')}{
    height: 500px;
  }
`
export const Section2 = styled(Section1)`
  background-color: #1F3541;
  h2,p{
    text-align: right;
  }
  .grid-2{
    grid-template-columns: 80px 2fr;
  }
  ${ResponsiveTo('lg')}{
    .grid-2{
      grid-template-columns: 200px 2fr;
    }
  }
`
