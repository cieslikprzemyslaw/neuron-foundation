import React, { useState, useEffect } from 'react';
import placeholder3 from '../../../assests/images/gallery/placeholder3.png';
import placeholder4 from '../../../assests/images/gallery/placeholder4.png';
import placeholder5 from '../../../assests/images/gallery/placeholder5.png';
import placeholder2 from '../../../assests/images/gallery/placeholder2.png';
import placeholder7 from '../../../assests/images/gallery/placeholder7.png';
import placeholder8 from '../../../assests/images/gallery/placeholder8.png';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
    GalleryContainer,
    VerticalImgWithDescription,
    SliderImgWithDescription,
    HorizontalImgWithDescription,
    ImgOnSmallerScreens,
    ImgOnLargerScreens,
    HorizontalImg,
    VerticalImg,
    CaptionTittle,
    ImgCaption,
    SliderImgCaption,
    BackBtn,
    NextBtn,
    CloseBtn,
    Carousel,
    BluredBackground,
    LeftArrow,
    RightArrow,
} from './styles.js';

const Photos = () => {
    const [isSliderActive, setIsSliderActive] = useState(false);

    const imgClickHandler = (event) => {
        if (event.target.hasAttribute('data-only-img')) return;
        if (event.target.closest('img')) setIsSliderActive(true);
    };

    // const resizeHandler = (event) => {
    //     if (event.target.innerWidth < 1200 && isSliderActive)
    //         setIsSliderActive((prevState) => !prevState);
    // };

    // useEffect(() => {
    //     window.addEventListener('resize', resizeHandler);

    //     return () => {
    //         window.removeEventListener('resize', resizeHandler);
    //     };
    // }, []);

    return (
        <>
            {isSliderActive && (
                <Carousel>
                    <BluredBackground>
                        <CarouselProvider
                            naturalSlideWidth={100}
                            naturalSlideHeight={40}
                            totalSlides={3}
                            infinite
                        >
                            <Slider>
                                <Slide index={0}>
                                    <div style={{ width: '30%', height: '100%', margin: '0 auto' }}>
                                        <SliderImgWithDescription>
                                            <VerticalImg src={placeholder5} />
                                            <SliderImgCaption>
                                                <CaptionTittle>
                                                    Lorem ipsum dolor sit amet
                                                </CaptionTittle>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Lorem ipsum dolor sit amet, consectetu
                                                adipiscing elit. Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                            </SliderImgCaption>
                                        </SliderImgWithDescription>
                                    </div>
                                </Slide>
                                <Slide index={1}>
                                    <div style={{ width: '30%', height: '100%', margin: '0 auto' }}>
                                        <SliderImgWithDescription>
                                            <VerticalImg src={placeholder5} />
                                            <SliderImgCaption>
                                                <CaptionTittle>
                                                    Lorem ipsum dolor sit amet
                                                </CaptionTittle>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Lorem ipsum dolor sit amet, consectetu
                                                adipiscing elit. Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                            </SliderImgCaption>
                                        </SliderImgWithDescription>
                                    </div>
                                    .
                                </Slide>
                                <Slide index={2}>
                                    <div style={{ width: '30%', height: '100%', margin: '0 auto' }}>
                                        <SliderImgWithDescription>
                                            <VerticalImg src={placeholder5} />
                                            <SliderImgCaption>
                                                <CaptionTittle>
                                                    Lorem ipsum dolor sit amet
                                                </CaptionTittle>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Lorem ipsum dolor sit amet, consectetu
                                                adipiscing elit. Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                            </SliderImgCaption>
                                        </SliderImgWithDescription>
                                    </div>
                                </Slide>
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
                            <CloseBtn onClick={() => setIsSliderActive(false)} />
                        </CarouselProvider>
                    </BluredBackground>
                </Carousel>
            )}

            <GalleryContainer onClick={imgClickHandler}>
                {!isSliderActive && (
                    <>
                        <HorizontalImgWithDescription left>
                            <HorizontalImg src={placeholder3} />
                            <ImgCaption left>
                                <CaptionTittle>Lorem ipsum dolor sit amet</CaptionTittle>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                                dolor sit amet, consectetu adipiscing elit.Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit.
                            </ImgCaption>
                        </HorizontalImgWithDescription>

                        <VerticalImgWithDescription>
                            <VerticalImg src={placeholder5} />
                            <ImgCaption bottom>
                                <CaptionTittle>Lorem ipsum dolor sit amet</CaptionTittle>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                                dolor sit amet, consectetu adipiscing elit. Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit.
                            </ImgCaption>
                        </VerticalImgWithDescription>

                        <ImgOnLargerScreens data-only-img src={placeholder7} />

                        <HorizontalImgWithDescription>
                            <HorizontalImg src={placeholder4} />
                            <ImgCaption right>
                                <CaptionTittle>Lorem ipsum dolor sit amet</CaptionTittle>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                                dolor sit amet.
                            </ImgCaption>
                        </HorizontalImgWithDescription>
                    </>
                )}

                <ImgOnSmallerScreens data-only-img src={placeholder2} />

                <HorizontalImgWithDescription left>
                    <HorizontalImg src={placeholder3} />
                    <ImgCaption left>
                        <CaptionTittle>Lorem ipsum dolor sit amet</CaptionTittle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
                        sit amet, consectetu adipiscing elit.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </ImgCaption>
                </HorizontalImgWithDescription>

                <ImgOnLargerScreens data-only-img src={placeholder8} />

                <VerticalImgWithDescription>
                    <VerticalImg src={placeholder5} />
                    <ImgCaption bottom>
                        <CaptionTittle>Lorem ipsum dolor sit amet</CaptionTittle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                        sit amet, consectetu adipiscing elit. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                    </ImgCaption>
                </VerticalImgWithDescription>

                <HorizontalImgWithDescription>
                    <HorizontalImg src={placeholder4} />
                    <ImgCaption right>
                        <CaptionTittle>Lorem ipsum dolor sit amet</CaptionTittle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                        sit amet.
                    </ImgCaption>
                </HorizontalImgWithDescription>
            </GalleryContainer>
        </>
    );
};

export default Photos;
