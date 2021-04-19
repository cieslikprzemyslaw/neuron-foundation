import styled from 'styled-components';
import bg_blur from '../../../assests/images/gallery/bg_blur.png';

const SliderImgWithDescription = styled.div`
    background-color: #f5f5f5;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const SliderImgCaption = styled.div`
    padding: 10px;
    line-height: 27px;
    font-weight: 400;
    padding: 10px;
`;

const SliderImg = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px 8px 0px 0px;
`;

const CarouselWrapper = styled.div`
    position: relative;
    width: 100%;
    background-image: url(${bg_blur});
    margin-top: 50px;

    @media (max-width: 1200px) {
        display: none;
    }
`;

const CarouselContainer = styled.div`
    position: relative;
    width: 80%;
    margin: 0 auto;
`;

const SlideContainer = styled.div`
    width: 30%;
    height: 100%;
    margin: 0 auto;
`;

const BluredBackground = styled.div`
    width: 100%;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px); // This be the blur
    padding: 67px 0;
    width: 100vw;
`;

const BackBtn = styled.div`
    position: absolute;
    top: 50%;
    left: 1vmin;
    transform: translateY(-50%);

    button {
        background: transparent;
        box-shadow: 0px 0px 0px transparent;
        border: 0px solid transparent;
        text-shadow: 0px 0px 0px transparent;
    }
`;

const NextBtn = styled.div`
    position: absolute;
    right: 5vmin;
    top: 50%;
    transform: translateY(-50%);

    button {
        background: transparent;
        box-shadow: 0px 0px 0px transparent;
        border: 0px solid transparent;
        text-shadow: 0px 0px 0px transparent;
    }
`;

const CloseBtn = styled.div`
    position: absolute;
    right: -50px;
    top: -67px;
    width: 32px;
    height: 32px;
    opacity: 1;
    cursor: pointer;

    &:before,
    &:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 36px;
        width: 4px;
        background-color: grey;
    }

    &:before {
        transform: rotate(45deg);
    }

    &:after {
        transform: rotate(-45deg);
    }
`;

const LeftArrow = styled.i`
    width: 4vmin;
    height: 4vmin;
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: rotate(225deg);

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        border-width: 0.8vmin 0.8vmin 0 0;
        border-style: solid;
        border-color: grey;
        transition: 0.2s ease;
        display: block;
        transform-origin: 100% 0;
    }

    &:after {
        content: '';
        float: left;
        position: relative;
        top: -100%;
        width: 100%;
        height: 100%;
        border-width: 0 0.8vmin 0 0;
        border-style: solid;
        border-color: grey;
        transform-origin: 100% 0;
        transition: 0.2s ease;
    }
`;

const RightArrow = styled.i`
    width: 4vmin;
    height: 4vmin;
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: rotate(45deg);

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        border-width: 0.8vmin 0.8vmin 0 0;
        border-style: solid;
        border-color: grey;
        transition: 0.2s ease;
        display: block;
        transform-origin: 100% 0;
    }

    &:after {
        content: '';
        float: left;
        position: relative;
        top: -100%;
        width: 100%;
        height: 100%;
        border-width: 0 0.8vmin 0 0;
        border-style: solid;
        border-color: grey;
        transform-origin: 100% 0;
        transition: 0.2s ease;
    }
`;

const CaptionTittle = styled.h4`
    margin-bottom: 10px;
`;

export {
    SliderImgWithDescription,
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
    CaptionTittle,
};
