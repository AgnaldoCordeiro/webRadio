import Image from 'next/image'
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


const items = [
  {
    src: "./user_364621493.jpg",
    altText: "Marcos Rocha",
    caption: "Locutor com mais de 25 anos de carreira.",
    header: '',
    key: '1',
  },
  {
    src: "./user_133062631.jpg",
    altText: "",
    caption: "Ricardo Souza",
    header: '',
    key: '2'
  },
  {
    src: "./user_444497912.jpg",
    altText: "Tina Roma",
    caption: "Tina Roma é uma radialista e apresentadora de televisão",
    header: '',
    key: '3',
  },
  {
    src: "./user_806859990.jpg",
    altText: "David Guetta",
    caption: "Melhor DJ do Mundo!",
    header: '',
    key: '4',

  },
  {
    src: "./user_1435636109.jpg",
    altText: "Jonas Santos",
    caption: "Locutor e produtor.",
    header: '',
    key: '5',

  },
  {
    src: "./user_1525450354.jpg",
    altText: "Calvin Harris",
    caption: "Melhor DJ do Mundo!",
    header: '',
    key: '6',
 
  },
  {
    src: "./user_1920492229.jpg",
    altText: "Bob Fernandez",
    caption: "Locutor e apresentador.",
    header: '',
    key: '7',
   
  },
];


const Equipe = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        tag="div"
        className="custom-tag"             
      >
        <img src={item.src} alt={item.altText} className="img-carousel"
        />
        <CarouselCaption captionText={item.caption} captionHeader={item.altText} className="carousel-caption" />
      </CarouselItem>
      
    );
  });

  
  return (
    <div className="container-fluid bg-gray-200 text-black py-20" id="equipe">
    <div  className="container">
    <h4 className="py-10 container text-center"> Nossa Equipe </h4>
        <div className="row">
            <div className="container w-50 pb-2">
                 <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
            </div>            
        </div>
    </div>
</div>

    
  );
}

export default Equipe;