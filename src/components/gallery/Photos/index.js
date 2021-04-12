import React, { useState } from 'react';
import Carousel from '../Carousel';
import MobilePhotos from '../MobilePhotos';
import placeholder1 from '../../../assests/images/gallery/desktop/placeholder1.png';
import placeholder2 from '../../../assests/images/gallery/desktop/placeholder2.png';
import placeholder3 from '../../../assests/images/gallery/desktop/placeholder3.png';
import placeholder4 from '../../../assests/images/gallery/desktop/placeholder4.png';
import placeholder5 from '../../../assests/images/gallery/desktop/placeholder5.png';
import placeholder6 from '../../../assests/images/gallery/desktop/placeholder6.png';
import placeholder7 from '../../../assests/images/gallery/desktop/placeholder7.png';
import placeholder8 from '../../../assests/images/gallery/desktop/placeholder8.png';
import placeholder9 from '../../../assests/images/gallery/desktop/placeholder9.png';
import placeholder10 from '../../../assests/images/gallery/desktop/placeholder10.png';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
    GalleryContainer,
    NarrowImgOnLargeScreen,
    CaptionTittle,
    ImgCaption,
    WideImgOnLargeScreen,
    FirstImgWithDesc,
    ThirdImgWithDesc,
    SecondImgWithDescription,
    FourthImgWithDescription,
    FifthImgWithDescription,
    SixthImgWithDescription,
    SeventhImgWithDescription,
    FirstImg,
    SecondImg,
    ThirdImg,
    FourthImg,
    FifthImg,
    SixthImg,
    SeventhImg,
} from './styles.js';

const Photos = () => {
    const [isSliderActive, setIsSliderActive] = useState(false);
    const [currentImg, serCurrentImg] = useState(0);

    const imgClickHandler = (event) => {
        if (window.innerWidth < 1200) return;
        if (
            event.target.hasAttribute('data-only-img') ||
            event.target.hasAttribute('data-mobile-img')
        )
            return;
        serCurrentImg(parseInt(event.target.getAttribute('data-img-idx'), 10));
        if (event.target.closest('img')) setIsSliderActive(true);
    };

    return (
        <>
            {isSliderActive && (
                <Carousel currentImg={currentImg} setIsSliderActive={setIsSliderActive} />
            )}

            <GalleryContainer isSliderActive={isSliderActive} onClick={imgClickHandler}>
                {!isSliderActive && (
                    <>
                        <FirstImgWithDesc>
                            <FirstImg data-img-idx="0" src={placeholder1} />
                            <ImgCaption left>
                                <CaptionTittle>Lorem ipsum dolor sit amet</CaptionTittle>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                                dolor sit amet, consectetu adipiscing elit.Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit.
                            </ImgCaption>
                        </FirstImgWithDesc>

                        <SecondImgWithDescription>
                            <SecondImg data-img-idx="1" src={placeholder2} />
                            <ImgCaption bottom>
                                <CaptionTittle>Lorem ipsum dolor sit amet</CaptionTittle>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                                dolor sit amet, consectetu adipiscing elit. Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit.
                            </ImgCaption>
                        </SecondImgWithDescription>

                        <NarrowImgOnLargeScreen data-only-img src={placeholder8} />

                        <ThirdImgWithDesc>
                            <ThirdImg data-img-idx="2" src={placeholder3} />
                            <ImgCaption right>
                                <CaptionTittle>Lorem ipsum dolor sit amet</CaptionTittle>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                                dolor sit amet.
                            </ImgCaption>
                        </ThirdImgWithDesc>
                    </>
                )}

                <MobilePhotos />

                <FourthImgWithDescription>
                    <FourthImg data-img-idx="3" src={placeholder4} />
                    <ImgCaption left>
                        <CaptionTittle>Lorem ipsum dolor sit amet</CaptionTittle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
                        sit amet, consectetu adipiscing elit.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </ImgCaption>
                </FourthImgWithDescription>

                <NarrowImgOnLargeScreen data-only-img src={placeholder9} />

                <FifthImgWithDescription>
                    <FifthImg data-img-idx="4" src={placeholder5} />
                    <ImgCaption left>
                        <CaptionTittle>Lorem ipsum dolor sit amet</CaptionTittle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
                        sit amet, consectetu adipiscing elit.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </ImgCaption>
                </FifthImgWithDescription>

                <SixthImgWithDescription>
                    <SixthImg data-img-idx="5" src={placeholder6} />
                    <ImgCaption bottom>
                        <CaptionTittle>Lorem ipsum dolor sit amet</CaptionTittle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                        sit amet, consectetu adipiscing elit. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                    </ImgCaption>
                </SixthImgWithDescription>

                <WideImgOnLargeScreen data-only-img src={placeholder10} />

                <SeventhImgWithDescription>
                    <SeventhImg data-img-idx="6" src={placeholder7} />
                    <ImgCaption left>
                        <CaptionTittle>Lorem ipsum dolor sit amet</CaptionTittle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
                        sit amet, consectetu adipiscing elit.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </ImgCaption>
                </SeventhImgWithDescription>
            </GalleryContainer>
        </>
    );
};

export default Photos;
