import styled from 'styled-components';
import bg_blur from '../../../assests/images/gallery/bg_blur.png';

const GalleryContainer = styled.div`
    display: grid;
    margin-top: 50px;
    margin-bottom: 100px;
    grid-gap: 30px;
    position: relative;

    @media (min-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1000px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const VerticalImgWithDescription = styled.div`
    background-color: #f5f5f5;
    border-radius: 8px;
    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
        overflow: auto;
    }

    @media (min-width: 800px) {
        flex-direction: column-reverse;
    }
`;

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
    flex: 1;
`;

const HorizontalImgWithDescription = styled.div`
    background-color: #f5f5f5;
    border-radius: 8px;
    display: flex;
    justify-content: flex-start;
    flex-direction: ${(props) => (props.left ? 'row' : 'row-reverse')};

    @media (max-width: 800px) {
        overflow: auto;
    }

    @media (min-width: 800px) {
        flex-direction: column;
    }
`;

const ImgOnSmallerScreens = styled.img`
    display: none;

    @media (min-width: 320px) and (max-width: 800px) {
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 8px;
        display: inline;
    }
`;

const ImgOnLargerScreens = styled.img`
    display: none;

    @media (min-width: 1000px) {
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 8px;
        display: inline;
    }
`;

const HorizontalImg = styled.img`
    max-width: 100%;
    height: 100%;
    cursor: pointer;
    object-fit: cover;
    flex: 1;
    border-radius: 8px;

    @media (min-width: 320px) and (max-width: 800px) {
        position: sticky;
        top: 0;
    }
`;

const VerticalImg = styled.img`
    max-width: 100%;
    height: 100%;
    cursor: pointer;
    object-fit: cover;
    flex: 1;
    border-radius: 8px;
`;

const CaptionTittle = styled.h4`
    margin-bottom: 10px;
`;

const ImgCaption = styled.div`
    padding: 10px;
    line-height: 27px;
    font-weight: 400;
    padding: 10px;
    flex: 1;

    @media (min-width: 320px) and (max-width: 640px) {
        text-align: ${(props) => (props.left ? 'left' : 'right')};
        height: 0px;
        line-height: 20px;
        font-size: 14px;
    }

    @media (min-width: 640px) and (max-width: 800px) {
        text-align: ${(props) => (props.left ? 'left' : 'right')};
    }

    @media (min-width: 800px) {
        display: flex;
        flex-direction: column;
        justify-content: ${(props) => (props.bottom ? 'flex-end' : 'flex-start')};
    }
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
    right: -32px;
    top: 0;
    width: 32px;
    height: 32px;
    opacity: 1;
    cursor: pointer;

    &:before,
    &:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
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

const Carousel = styled.div`
    position: relative;
    width: 100%;
    background-image: url(${bg_blur});
    margin-top: 50px;

    @media (max-width: 1200px) {
        display: none;
    }
`;

const BluredBackground = styled.div`
    width: 100%;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px); // This be the blur
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

export {
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
};
