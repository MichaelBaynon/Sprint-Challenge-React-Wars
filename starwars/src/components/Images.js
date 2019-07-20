import React from 'react'
import styled from 'styled-components'
import lukeSkywalker from '../Images/lukeSkywalker.jpg'
import c3po from '../Images/c3po.jpg'
import beru from '../Images/beru.jpg'
import biggsDarklight from '../Images/biggsDarklighter.jpg'
import lars from '../Images/lars.png'
import leia from '../Images/leia.jpg'
import obiWan from '../Images/obiWan.jpg'
import r2d2 from '../Images/r2-d2.jpg'
import r5d4 from '../Images/r5d4.jpg'
import vader from '../Images/vader.jpg'

export default function Images() {
    
    const StyledImgBox = styled.div`
    display: flex;
    margin-top: -2119px;
    flex-direction: column;
    margin-left: 680px;
    
 `

 const StyledImg = styled.img`
 width: 300px;
    height: 200px;
    box-shadow: 1px 1px 5px;
border-radius: 10px;
border: 1px solid lightgrey;
margin-bottom: 10px;
 `


    
    return(
        <StyledImgBox>
        <StyledImg src={lukeSkywalker} />
        <StyledImg src={c3po} />
        <StyledImg src={r2d2} />
        <StyledImg src={vader} />
        <StyledImg src={leia} />
        <StyledImg src={lars} />
        <StyledImg src={beru} />
        <StyledImg src={r5d4} />
        <StyledImg src={biggsDarklight} />
        <StyledImg src={obiWan} /> 
        </StyledImgBox>
    )
}