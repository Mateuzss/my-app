import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import equipe from './assets/equipe.jpg'
import doctor from './assets/doctor.jpg'
import mulher from './assets/mulher.jpeg'


export const CarouselScheduled = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{
      width: '50vw',
      height: '50vh',
      marginLeft:'113px',
    }} >
      <Carousel.Item>
        <img style={{
          width: '25vw',
          height: '25vh',
          marginLeft:'113px',
        }}
          src={equipe}
          alt="First slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{
          width: '25vw',
          height: '25vh',
          marginLeft:'113px',
        }}
          src={doctor}
          alt="Second slide"
        />
        <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{
          width: '25vw',
          height: '25vh',
          marginLeft:'113px',
        }}
          src={mulher}
          alt="Third slide"
        />


        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}