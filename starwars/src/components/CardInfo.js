import React from 'react'
import styled from 'styled-components'

export default function CardInfo({name, birth_year, height, mass}) {

const StyledDivs = styled.div`
border: 1px solid lightgrey;
width: 300px;
height: 200px;
margin-left: 565px;
font-size: 15px;
margin-bottom: 10px;
display: inline-flex;
flex-direction: column;
background: WhiteSmoke;
box-shadow: 1px 1px 5px;
border-radius: 10px;
`

 

    return (

        <StyledDivs>
            
          <h4>{name}</h4>
          <p>Height: {height} cm</p>
          <p>Mass: {mass} kg</p>
          <p>Birthyear: {birth_year}</p>
          </StyledDivs>
          
    )
}