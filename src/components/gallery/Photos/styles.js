import styled from 'styled-components';

const GalleryContainer = styled.div`
    display: grid;
    margin-top: 50px;
    grid-gap: 30px;
    position: relative;
    margin-bottom 120px;

    @media (max-width: 800px) {
        grid-template-rows: 1fr;
    }

    @media (min-width: 800px) {
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: 1fr 1fr 1fr;
    }

    @media (min-width: 1000px) {
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: 1fr 1fr ${(props) => (props.isSliderActive ? '0' : '1fr')};
    }
`;

const FirstImgWithDesc = styled.figure`
    grid-column: span 2;
    background-color: #f5f5f5;
    border-radius: 8px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;

    @media (max-width: 800px) {
        display: none;
    }
`;

const FirstImg = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    flex: 1;
    border-radius: 8px 8px 0px 0px;

    @media (min-width: 1200px) {
        cursor: pointer;
    }
`;

const SecondImgWithDescription = styled.div`
    grid-column: span 2;
    background-color: #f5f5f5;
    border-radius: 8px;
    display: flex;
    flex-direction: column-reverse;

    @media (max-width: 800px) {
        display: none;
    }
`;

const SecondImg = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    flex: 1;
    border-radius: 0px 0px 8px 8px;

    @media (max-width: 800px) {
        border-radius: 8px 8px 0px 0px;
    }

    @media (min-width: 1200px) {
        cursor: pointer;
    }
`;

const ThirdImgWithDesc = styled.figure`
    grid-column: span 2;
    background-color: #f5f5f5;
    border-radius: 8px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;

    @media (max-width: 800px) {
        display: none;
    }
`;

const ThirdImg = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    flex: 1;
    border-radius: 8px 8px 0px 0px;

    @media (min-width: 320px) and (max-width: 800px) {
        max-width: 50%;
        position: sticky;
        top: 0;
        border-radius: 0px 8px 8px 0px;
    }

    @media (min-width: 1200px) {
        cursor: pointer;
    }
`;

const FourthImgWithDescription = styled.div`
    grid-column: span 3;
    background-color: #f5f5f5;
    border-radius: 8px 8px 0px 0px;
    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
        display: none;
    }

    @media (max-width: 1000px) {
        flex-direction: column-reverse;
    }
`;

const FourthImg = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    flex: 1;
    border-radius: 8px 8px 0px 0px;

    @media (max-width: 1000px) {
        border-radius: 0px 0px 8px 8px;
    }

    @media (min-width: 1200px) {
        cursor: pointer;
    }
`;

const FifthImgWithDescription = styled.div`
    grid-column: span 3;
    background-color: #f5f5f5;
    border-radius: 8px;
    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
        display: none;
    }
`;

const FifthImg = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    flex: 1;
    border-radius: 8px 8px 0px 0px;

    @media (min-width: 1200px) {
        cursor: pointer;
    }
`;

const SixthImgWithDescription = styled.div`
    grid-column: span 2;
    background-color: #f5f5f5;
    border-radius: 8px;
    display: flex;
    flex-direction: column-reverse;

    @media (max-width: 800px) {
        display: none;
    }

    @media (min-width: 800px) and (max-width: 1000px) {
        grid-column: span 3;
    }
`;

const SixthImg = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    flex: 1;
    border-radius: 0px 0px 8px 8px;

    @media (min-width: 1200px) {
        cursor: pointer;
    }
`;

const SeventhImgWithDescription = styled.div`
    grid-column: span 3;
    background-color: #f5f5f5;
    border-radius: 8px;
    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
        display: none;
    }

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

const SeventhImg = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    flex: 1;
    border-radius: 8px 8px 0px 0px;

    @media (min-width: 1200px) {
        cursor: pointer;
    }
`;

const NarrowImgOnLargeScreen = styled.img`
    grid-column: span 2;
    display: none;

    @media (min-width: 1000px) {
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 8px;
        display: inline;
    }
`;

const WideImgOnLargeScreen = styled.img`
    grid-column: span 3;
    display: none;

    @media (min-width: 1000px) {
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 8px;
        display: inline;
    }
`;

const CaptionTittle = styled.h4`
    margin-bottom: 10px;
`;

const ImgCaption = styled.div`
    padding: 30px 20px;
    line-height: 27px;
    font-weight: 400;
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

export {
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
};
