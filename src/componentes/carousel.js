import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import medicovetor from './assets/medicovetor.jpg'
import peopleGroup from './assets/peopleGroup.jpeg'
import peopleGoupTwo from './assets/peopleGoupTwo.jpeg'

export const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{
      width: '50vw',
      height: '50vh',
    }} >
      <Carousel.Item>
        <img style={{
          width: '50vw',
          height: '50vh',
        }}
          src={medicovetor}
          alt="First slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{
          width: '50vw',
          height: '50vh',
        }}
          src={peopleGroup}
          alt="Second slide"
        />
        <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{
          width: '50vw',
          height: '50vh',
        }}
          src={peopleGoupTwo}
          alt="Third slide"
        />


        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}