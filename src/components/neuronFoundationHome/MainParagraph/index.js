import { useIntl } from "gatsby-plugin-intl";
import React from "react";
import MobileNav from "../../staticComponents/MobileNav/index";
import person from "../../../assests/images/support/desktop/NeuroN Foundation_page-0003.png";
import {
  JoinTitle,
  Container,
  JoinSubtitle,
  Title,
  Paragraph,
  Line,
  Article,
  DesktopSection,
  DesktopImage,
} from "./styles";
import { MobileArticle, DesktopArticle } from './articles';


const MainParagraph = () => {
  const intl = useIntl();

  return (
    <>
      <MobileNav />
      <Container>
        <JoinTitle>Dołącz</JoinTitle>
        <JoinSubtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          tristique id magna id tempor. Nam eu turpis orci. In vestibulum purus
          nec augue consequat, nec posuere sem fermentum. Suspendisse sit amet
          pharetra est, vel sodales dui. Pellentesque mattis non nisi ac mattis.
        </JoinSubtitle>
        <section>
          <DesktopSection>
            <div>
              {DesktopArticle.map(({title,paragraph}) => (
                <Article>
                  <Title>{title}</Title>
                  <Paragraph>{paragraph}</Paragraph>
                  <Line />
                </Article>
              ))}
            </div>
            <DesktopImage src={person} alt="Person image" hidden />
          </DesktopSection>
          {MobileArticle.map(({title,paragraph}) => (
            <Article hidden>
              <Title>{title}</Title>
              <Paragraph>{paragraph}</Paragraph>
              <Line />
            </Article>
          ))}
        </section>
      </Container>
    </>
  );
};

export default MainParagraph;
