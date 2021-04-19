import React from 'react';
import placeholder1 from '../../../assests/images/gallery/desktop/placeholder1.png';
import placeholder2 from '../../../assests/images/gallery/desktop/placeholder2.png';
import placeholder3 from '../../../assests/images/gallery/desktop/placeholder3.png';
import placeholder4 from '../../../assests/images/gallery/desktop/placeholder4.png';
import placeholder5 from '../../../assests/images/gallery/desktop/placeholder5.png';
import placeholder6 from '../../../assests/images/gallery/desktop/placeholder6.png';
import placeholder7 from '../../../assests/images/gallery/desktop/placeholder7.png';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
    SliderImgWithDescription,
    CaptionTittle,
    SliderImgCaption,
    BackBtn,
    NextBtn,
    CloseBtn,
    CarouselWrapper,
    BluredBackground,
    LeftArrow,
    RightArrow,
    SliderImg,
    CarouselContainer,
    SlideContainer,
} from './styles.js';

const images = [
    {
        img: placeholder1,
        captionTitle: 'Lorem ipsum dolor sit amet',
        caption:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetu adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        img: placeholder2,
        captionTitle: 'Lorem ipsum dolor sit amet',
        caption:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
    },
    {
        img: placeholder3,
        captionTitle: 'Lorem ipsum dolor sit amet',
        caption:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetu adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        img: placeholder4,
        captionTitle: 'Lorem ipsum dolor sit amet',
        caption:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetu adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        img: placeholder5,
        captionTitle: 'Lorem ipsum dolor sit amet',
        caption:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
    },
    {
        img: placeholder6,
        captionTitle: 'Lorem ipsum dolor sit amet',
        caption:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetu adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        img: placeholder7,
        captionTitle: 'Lorem ipsum dolor sit amet',
        caption:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetu adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
];

const Carousel = (props) => {
    return (
        <CarouselWrapper>
            <BluredBackground>
                <CarouselContainer>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={50}
                        totalSlides={images.length}
                        infinite
                        currentSlide={props.currentImg}
                    >
                        <Slider>
                            {images.map((item, idx) => (
                                <Slide key={`${item.img}-${idx}`} index={idx}>
                                    <SlideContainer>
                                        <SliderImgWithDescription>
                                            <SliderImg src={item.img} />
                                            <SliderImgCaption>
                                                <CaptionTittle>{item.captionTitle}</CaptionTittle>
                                                {item.caption}
                                            </SliderImgCaption>
                                        </SliderImgWithDescription>
                                    </SlideContainer>
                                </Slide>
                            ))}
                        </Slider>
                        <BackBtn>
                            <ButtonBack>
                                <LeftArrow />
                            </ButtonBack>
                        </BackBtn>
                        <NextBtn>
                            <ButtonNext>
                                <RightArrow />
                            </ButtonNext>
                        </NextBtn>
                        <CloseBtn onClick={() => props.setIsSliderActive(false)} />
                    </CarouselProvider>
                </CarouselContainer>
            </BluredBackground>
        </CarouselWrapper>
    );
};

export default Carousel;
