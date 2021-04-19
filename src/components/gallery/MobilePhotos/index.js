import React from 'react';
import placeholder3 from '../../../assests/images/gallery/mobile/placeholder3.png';
import placeholder4 from '../../../assests/images/gallery/mobile/placeholder4.png';
import placeholder5 from '../../../assests/images/gallery/mobile/placeholder5.png';
import placeholder2 from '../../../assests/images/gallery/mobile/placeholder2.png';
import placeholder6 from '../../../assests/images/gallery/mobile/placeholder6.png';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
    ImgOnSmallerScreen,
    CaptionTittle,
    ImgCaption,
    MobileFirstImgWithDesc,
    MobileFirstImg,
    MobileSecondImgWithDescription,
    MobileSecondImg,
    MobileThirdImgWithDesc,
    MobileThirdImg,
} from './styles.js';

const MobilePhotos = () => {
    return (
        <>
            <MobileFirstImgWithDesc>
                <MobileFirstImg data-mobile-img src={placeholder3} />
                <ImgCaption left>
                    <CaptionTittle>Lorem ipsum dolor sit amet</CaptionTittle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
                    amet, consectetu adipiscing elit.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                </ImgCaption>
            </MobileFirstImgWithDesc>

            <MobileSecondImgWithDescription>
                <MobileSecondImg data-mobile-img src={placeholder5} />
                <ImgCaption left bottom>
                    <CaptionTittle>Lorem ipsum dolor sit amet</CaptionTittle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                    amet, consectetu adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                </ImgCaption>
            </MobileSecondImgWithDescription>

            <MobileThirdImgWithDesc>
                <MobileThirdImg data-mobile-img src={placeholder4} />
                <ImgCaption right>
                    <CaptionTittle>Lorem ipsum dolor sit amet</CaptionTittle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                    amet.
                </ImgCaption>
            </MobileThirdImgWithDesc>

            <ImgOnSmallerScreen data-only-img src={placeholder2} />

            <MobileFirstImgWithDesc>
                <MobileFirstImg data-mobile-img src={placeholder3} />
                <ImgCaption left>
                    <CaptionTittle>Lorem ipsum dolor sit amet</CaptionTittle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
                    amet, consectetu adipiscing elit.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                </ImgCaption>
            </MobileFirstImgWithDesc>

            <MobileSecondImgWithDescription>
                <MobileSecondImg data-mobile-img src={placeholder5} />
                <ImgCaption bottom>
                    <CaptionTittle>Lorem ipsum dolor sit amet</CaptionTittle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                    amet, consectetu adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                </ImgCaption>
            </MobileSecondImgWithDescription>

            <MobileThirdImgWithDesc>
                <MobileThirdImg data-mobile-img src={placeholder4} />
                <ImgCaption right>
                    <CaptionTittle>Lorem ipsum dolor sit amet</CaptionTittle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                    amet.
                </ImgCaption>
            </MobileThirdImgWithDesc>

            <ImgOnSmallerScreen data-only-img src={placeholder6} />
        </>
    );
};

export default MobilePhotos;
