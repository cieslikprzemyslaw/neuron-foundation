
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import MobileNav from '../../staticComponents/MobileNav/index';
import styled from 'styled-components';
import person from '../../../assests/images/support/desktop/NeuroN Foundation_page-0003.png'
import { breakpoints } from '../../common/breakpoints';

const JoinTitle = styled.h1`
    font-size: 3.2rem;
    font-weight: 600;
    letter-spacing: 2%;
    margin-top: 8rem;
    margin-bottom: 3rem;
    color: #0e0e0e;
`;

const Container = styled.section`
    margin: 0 2rem;
    @media (min-width:${breakpoints.lg}){
            width:80%;
            margin:auto;
        }
`;
const JoinSubtitle = styled.b`
    letter-spacing: 1.2px;
    font-weight: 700;
    margin-bottom: 3rem;
    display: block;
    color: #0e0e0e;

    @media (min-width:${breakpoints.md}){
        font-weight:400;
        line-height:27px;
        letter-spacing:1.6;
    }
`;

const Title = styled.h3`
    font-size: 2rem;
    margin: 2.5rem 0;
    color: #0e0e0e;

    @media (min-width:${breakpoints.md}){
        text-align:right;
    }

`;
const Paragraph = styled.p`
    font-size: 1.6rem;
    line-height: 25px;
    color: rgba(0, 0, 0, 0.86);

    @media (min-width:${breakpoints.md}){
        text-align:right;
        margin-left:auto;
    }
`;
const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: #f5f5f5;
    margin: 3rem 0;
`;

const Article = styled.article`
    display:block;
    @media (min-width:${breakpoints.md}){
        display: ${({hidden})=>hidden && "none"};
        margin-right:14rem;
    }
`;
const DesktopSection = styled.div`
    display:block;


     @media (min-width:${breakpoints.md}){
        display: flex;
        justify-content:center;
        margin-top:12rem;

        article{
            display:flex;
            flex-direction:column;
            flex:.3;
            margin:auto;
        }
        div{
            width:45rem;
        }

     }

`;

const DesktopImage = styled.img`
    
    @media (min-width:${breakpoints.md}){
        display: ${({hidden})=>hidden ? "block" : "hidden"};
        margin-left:2rem;
        height:100%;
     }
     @media (min-width:${breakpoints.lg}){
        margin-left:14rem;
     }


`;

const MainParagraph = () => {
    const intl = useIntl();

    return (
        <>
            <MobileNav />
            <Container>
                <JoinTitle>Dołącz</JoinTitle>
                <JoinSubtitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique id
                    magna id tempor. Nam eu turpis orci. In vestibulum purus nec augue consequat,
                    nec posuere sem fermentum. Suspendisse sit amet pharetra est, vel sodales dui.
                    Pellentesque mattis non nisi ac mattis.
                </JoinSubtitle>
                <section>
                    <DesktopSection>
                        <div>
                    <Article>
                        <Title>Kupuj w sklepie</Title>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique
                            id magna id tempor. Nam eu turpis orci. In vestibulum purus nec augue
                            consequat, nec posuere sem fermentum. Suspendisse sit amet pharetra est,
                            vel sodales dui. Pellentesque mattis non nisi ac mattis.
                        </Paragraph>
                        <Line />
                    </Article>

                    <Article>
                        <Title>Dołącz do Social Lions</Title>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique
                            id magna id tempor. Nam eu turpis orci. In vestibulum purus nec augue
                            consequat, nec posuere sem fermentum. Suspendisse sit amet pharetra est,
                            vel sodales dui. Pellentesque mattis non nisi ac mattis.
                        </Paragraph>
                        <Line />
                    </Article>
                </div>
                    <DesktopImage src={person} alt="person image" hidden/>
                    </DesktopSection>
                    <Article hidden>
                        <Title>Slot Machine</Title>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique
                            id magna id tempor. Nam eu turpis orci. In vestibulum purus nec augue
                            consequat, nec posuere sem fermentum. Suspendisse sit amet pharetra est,
                            vel sodales dui. Pellentesque mattis non nisi ac mattis.
                        </Paragraph>
                        <Line />
                    </Article>
                    <Article hidden>
                        <Title>Zakupy w internecie </Title>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique
                            id magna id tempor. Nam eu turpis orci. In vestibulum purus nec augue
                            consequat, nec posuere sem fermentum. Suspendisse sit amet pharetra est,
                            vel sodales dui. Pellentesque mattis non nisi ac mattis.
                        </Paragraph>
                        <Line />
                    </Article>


                    <Article hidden>
                        <Title>Cordial Escort</Title>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique
                            id magna id tempor. Nam eu turpis orci. In vestibulum purus nec augue
                            consequat, nec posuere sem fermentum. Suspendisse sit amet pharetra est,
                            vel sodales dui. Pellentesque mattis non nisi ac mattis.
                        </Paragraph>
                        <Line />
                    </Article>
                    <Article hidden>
                        <Title>Neuron Branch</Title>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique
                            id magna id tempor. Nam eu turpis orci. In vestibulum purus nec augue
                            consequat, nec posuere sem fermentum. Suspendisse sit amet pharetra est,
                            vel sodales dui. Pellentesque mattis non nisi ac mattis.
                        </Paragraph>
                        <Line />
                    </Article>
                </section>
            </Container>
        </>
    );
};

export default MainParagraph;