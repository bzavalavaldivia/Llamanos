import React, { useState } from 'react';
import { CarouselContainer, CarouselItem, CorouselItemContainer, CarouselItemDescription, CarouselItemTitle, CarouselNextButton, CarouselPrevButton } from './CarouselElements';

const Carousel = ({items}) => {
    const [current, setCurrent] = useState(0);
    const length = items.length;

    const nextItem = () => {
        setCurrent(current === length -1 ? 0 : current + 1);
    };

    const prevItem = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(items) || items.length <= 0) {
        return null;
    }

    return (
        <CarouselContainer>
            <CarouselPrevButton onClick={prevItem} />
            <CarouselNextButton onClick={nextItem} />
            {items.map((item, index) => {
                return <CarouselItem image={item.image} active={index === current} key={item.id}>
                    <CorouselItemContainer>
                        <CarouselItemTitle>{item.title}</CarouselItemTitle>
                        <CarouselItemDescription>{item.description}</CarouselItemDescription>
                        </CorouselItemContainer>
                </CarouselItem>
            })}
        </CarouselContainer>
    );
}

export default Carousel;