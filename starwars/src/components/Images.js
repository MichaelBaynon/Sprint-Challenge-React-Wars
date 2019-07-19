import React from 'react'
import styled from 'styled-components'
import lukeSkywalker from '../Images/lukeSkywalker.jpg'
import c3po from '../Images/c3po.jpg'

export default function Images() {
    
    const StyledImgBox = styled.div`
    display: flex;
    margin-top: -1000px;
    flex-direction: column;
 `

 const StyledImg = styled.img`
 width: 300px;
    height: 200px;
    
 `


    
    return(
        <StyledImgBox>
        <StyledImg src={lukeSkywalker} />
        <StyledImg src={c3po} />
        </StyledImgBox>
    )
}