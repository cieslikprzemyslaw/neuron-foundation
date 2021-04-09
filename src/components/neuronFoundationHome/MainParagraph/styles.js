import styled from 'styled-components';
import {
    respondTo
} from '../../common/respondTo';


const JoinTitle = styled.h1 `
    font-size: 3.2rem;
    font-weight: 600;
    letter-spacing: 2%;
    margin-top: 8rem;
    margin-bottom: 3rem;
    color: #0e0e0e;
`;

const Container = styled.section `
    margin: 0 2rem;
        ${respondTo.lg`
            width:80%;
            margin:auto;
        `}
`;
const JoinSubtitle = styled.b `
    letter-spacing: 1.2px;
    font-weight: 700;
    margin-bottom: 3rem;
    display: block;
    color: #0e0e0e;

    ${respondTo.md`
        font-weight:400;
        line-height:27px;
        letter-spacing:1.6;
    `}
`;

const Title = styled.h3 `
    font-size: 2rem;
    margin: 2.5rem 0;
    color: #0e0e0e;
    
    ${respondTo.md`
       text-align:right;
    `}

`;
const Paragraph = styled.p `
    font-size: 1.6rem;
    line-height: 25px;
    color: rgba(0, 0, 0, 0.86);

    ${respondTo.md`
      text-align:right;
      margin-left:auto;
    `}
`;
const Line = styled.div `
    width: 100%;
    height: 1px;
    background-color: #f5f5f5;
    margin: 3rem 0;
`;

const Article = styled.article `
    display:block;

    ${respondTo.md`
       display: ${({hidden})=>hidden && "none"};
       margin-right:14rem;
    `}
`;
const DesktopSection = styled.div `
    display:block;

     ${respondTo.md`
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
     `}

`;

const DesktopImage = styled.img `
    

     ${respondTo.md`
        display: ${({hidden})=>hidden ? "block" : "hidden"};
        margin-left:2rem;
        height:100%;
     `}
     ${respondTo.lg`
        margin-left:14rem;
     `}

`;

export {
    JoinTitle,
    Container,
    JoinSubtitle,
    Title,
    Paragraph,
    Line,
    Article,
    DesktopSection,
    DesktopImage
}