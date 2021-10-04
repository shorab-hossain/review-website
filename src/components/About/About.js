
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
const About = () => {
    const [cards,setCards] =useState([]);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res =>res.json())
        .then(data =>setCards(data))
    },[])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto mt-5 ">
        {
                cards.map(card =><Card  card={card}></Card>)
        }
         </div>
    );
};

export default About;