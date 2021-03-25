import React from 'react';
import styled from 'styled-components';
import image_placeholder3 from '../../../assests/images/image_placeholder3.png';
import image_placeholder4 from '../../../assests/images/image_placeholder4.png';
import image_placeholder5 from '../../../assests/images/image_placeholder5.png';
import image_placeholder2 from '../../../assests/images/image_placeholder2.png';

const Container = styled.div`
    display: grid;
    margin-top: 50px;
    margin-bottom: 100px;
    grid-gap: 30px;

    @media (min-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const ImgWithDescription = styled.div`
    background-color: #f5f5f5;
    overflow: auto;
    border-radius: 8px;
    font-size: 2rem;

    display: ${(props) => (props.bottom ? 'flex' : 'block')};
    justify-content: flex-end;
    flex-flow: column;
`;

const OnlyImg = styled.img`
    width: 100%;
    border-radius: 8px;
`;

const FloatLeftImg = styled.img`
    @media (min-width: 320px) and (max-width: 800px) {
        width: 50%;
        display: inline-block;
        float: left;
    }

    @media (min-width: 800px) {
        width: 100%;
        display: block;
    }
`;

const FloatRightImg = styled.img`
    @media (min-width: 320px) and (max-width: 800px) {
        width: 50%;
        display: inline-block;
        float: right;
    }

    @media (min-width: 800px) {
        width: 100%;
        display: block;
    }
`;

const FloatTopImg = styled.img`
    width: 100%;
    display: block;
`;

const CaptionTittle = styled.h4`
    margin-bottom: 10px;
    font-weight: 600;
`;

const ImgCaption = styled.div`
    padding: 10px;
    line-height: 27px;
    font-weight: 400;

    @media (min-width: 320px) and (max-width: 800px) {
        width: ${(props) => (props.top ? '100%' : '50%')};
        display: ${(props) => (props.top ? 'block' : 'inline-block')};
        text-align: ${(props) => (props.left ? 'left' : 'right')};
    }

    @media (min-width: 800px) {
        width: 100%;
        display: block;
    }
`;

const Photos = () => {
    return (
        <Container>
            <ImgWithDescription>
                <FloatLeftImg src={image_placeholder3} />
                <ImgCaption left>
                    <CaptionTittle>Lorem ipsum dolor sit amet</CaptionTittle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
                    amet, consectetu adipiscing elit.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                </ImgCaption>
            </ImgWithDescription>

            {/* < 812 */}

            <ImgWithDescription>
                <FloatTopImg src={image_placeholder5} />
                <ImgCaption top left>
                    <CaptionTittle>Lorem ipsum dolor sit amet</CaptionTittle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                    amet, consectetu adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                </ImgCaption>
            </ImgWithDescription>

            {/* <ImgWithDescription bottom>
                <ImgCaption top left>
                    <CaptionTittle>Lorem ipsum dolor sit amet</CaptionTittle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                    amet, consectetu adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                </ImgCaption>
                <FloatTopImg src={image_placeholder5} />
            </ImgWithDescription> */}

            <ImgWithDescription>
                <FloatRightImg src={image_placeholder4} />
                <ImgCaption right>
                    <CaptionTittle>Lorem ipsum dolor sit amet</CaptionTittle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                    amet.
                </ImgCaption>
            </ImgWithDescription>

            <OnlyImg src={image_placeholder2} />

            <ImgWithDescription>
                <FloatLeftImg src={image_placeholder3} />
                <ImgCaption left>
                    <CaptionTittle>Lorem ipsum dolor sit amet</CaptionTittle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
                    amet, consectetu adipiscing elit.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                </ImgCaption>
            </ImgWithDescription>
            <ImgWithDescription>
                <FloatTopImg src={image_placeholder5} />
                <ImgCaption top left>
                    <CaptionTittle>Lorem ipsum dolor sit amet</CaptionTittle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                    amet, consectetu adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                </ImgCaption>
            </ImgWithDescription>
            <ImgWithDescription>
                <FloatRightImg src={image_placeholder4} />
                <ImgCaption right>
                    <CaptionTittle>Lorem ipsum dolor sit amet</CaptionTittle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                    amet.
                </ImgCaption>
            </ImgWithDescription>
        </Container>
    );
};

export default Photos;
