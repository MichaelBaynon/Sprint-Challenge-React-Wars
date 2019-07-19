import React from 'react'
import styled from 'styled-components'
import lukeSkywalker from '../Images/lukeSkywalker.jpg'
import c3po from '../Images/c3po.jpg'

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
        </StyledImgBox>
    )
}