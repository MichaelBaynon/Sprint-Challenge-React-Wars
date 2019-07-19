import React,  {useState, useEffect} from 'react'
import axios from 'axios';
import CardInfo from './CardInfo'


export default function Card() {

const [card, setCard] = useState([])

useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then(res => {
        const cards = res.data.results
        
        setCard(cards)
        
        console.log(res.data.results)
    })
  }, []);

    

    return(
        <div>
          {card.map((card, index) => (
 <CardInfo name={card.name} height={card.height}  mass={card.mass} key={index} birth_year={card.birth_year} />
          ))}
               
            
            

        </div>
    )
}

