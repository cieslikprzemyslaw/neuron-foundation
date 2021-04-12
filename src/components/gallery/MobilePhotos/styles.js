import styled from 'styled-components';

const MobileFirstImgWithDesc = styled.figure`
    background-color: #f5f5f5;
    grid-column: span 3;
    border-radius: 8px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    height: 100%;
    overflow: auto;

    @media (min-width: 800px) {
        display: none;
    }
`;

const MobileFirstImg = styled.img`
    max-width: 50%;
    height: 100%;
    object-fit: cover;
    flex: 1;
    position: sticky;
    top: 0;
    border-radius: 8px 0px 0px 8px;
`;

const MobileSecondImgWithDescription = styled.div`
    grid-column: span 3;
    background-color: #f5f5f5;
    border-radius: 8px;
    display: flex;
    overflow: auto;
    flex-direction: column;

    @media (min-width: 800px) {
        display: none;
    }
`;

const MobileSecondImg = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    flex: 1;
    border-radius: 8px 8px 0px 0px;
`;

const MobileThirdImgWithDesc = styled.figure`
    grid-column: span 3;
    background-color: #f5f5f5;
    border-radius: 8px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row-reverse;
    height: 100%;
    overflow: auto;

    @media (min-width: 800px) {
        display: none;
    }
`;

const MobileThirdImg = styled.img`
    max-width: 50%;
    height: 100%;
    object-fit: cover;
    flex: 1;
    border-radius: 0px 8px 8px 0px;
    position: sticky;
    top: 0;

    @media (min-width: 800px) {
        display: none;
    }
`;

const ImgOnSmallerScreen = styled.img`
    display: none;

    @media (min-width: 320px) and (max-width: 800px) {
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 8px;
        display: inline;
        grid-column: span 3;
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
    text-align: ${(props) => (props.left ? 'left' : 'right')};

    @media (min-width: 320px) and (max-width: 640px) {
        padding: 10px 10px;
        height: 0px;
        line-height: 20px;
        font-size: 14px;
    }

    @media (min-width: 800px) {
        display: flex;
        flex-direction: column;
        justify-content: ${(props) => (props.bottom ? 'flex-end' : 'flex-start')};
    }
`;

export {
    ImgOnSmallerScreen,
    CaptionTittle,
    ImgCaption,
    MobileFirstImgWithDesc,
    MobileFirstImg,
    MobileSecondImgWithDescription,
    MobileSecondImg,
    MobileThirdImgWithDesc,
    MobileThirdImg,
};
