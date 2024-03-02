import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import theme from '../theme';
import {ReviewApi} from '../lib/Apiservice';
import TitleSection from '../components/Main/TitleSection';
import IntroSection from '../components/Main/IntroSection';
import FieldIntroSection from '../components/Main/FieldIntroSection';
import ActivitySection from '../components/Main/ActivitySection';

const AccessibilityHidden = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

const H2 = styled.h2`
  font-size: 1.875rem;
  margin: ${props => props.$margin || '0'};
  text-align: center;
`;

const GoblinH2 = styled(H2)`
  font-family: 'Goblin One';
  font-size: ${props => props.$size || '1.875rem'};
`;

const NanumH2 = styled(H2)`
  font-family: 'Nanum Myeongjo', serif;
`;

const H3 = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  margin: ${props => props.$margin || '0'};
`;

const P = styled.p`
  word-break: keep-all;
  margin: ${props => props.$margin || '0'};
  line-height: 1.5;
  color: ${props => (props.color ? theme.colors[props.color] : '')};
  font-size: ${props => (props.size ? props.size : '1rem')};
  text-align: ${props => props.align || ''};
`;

const Card = styled.article`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.src});
  background-color: ${theme.colors.blue};
  padding: 2rem 1rem;
  background-position: center;
  border-radius: 0.625rem;
  ${props => props.$border && 'border: 2px solid white;'}
  height: 30rem;
  position: relative;
`;

const SwiperContainer = styled.div`
  width: 100%;
  margin: ${props => props.margin || '0'};
`;

const Article = styled.article`
  width: 100%;
`;

const WriterContainer = styled.div`
  width: 90%;
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 1rem;
  text-align: center;
`;

const FakeSection = styled.section`
  margin: 2rem 0;
`;

function MainPage() {
  const [reviewData, setReviewData] = useState([]);

  const getReview = async () => {
    try {
      const localData = localStorage.getItem('reviewData');
      if (localData) {
        setReviewData(JSON.parse(localData));
      } else {
        const response = await ReviewApi();
        setReviewData(response);
        localStorage.setItem('reviewData', JSON.stringify(response));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getReview();
  }, []);

  return (
    <>
      <AccessibilityHidden>메인페이지</AccessibilityHidden>
      <TitleSection />
      <IntroSection />
      <FieldIntroSection />
      <ActivitySection />
      {/* 페이크 section 여기 일단 대충 보여줄려고 만든거니까 지우세요 */}
      <FakeSection>
        <GoblinH2 $margin='8rem 0 2rem 0' $size='1.25rem'>
          How was your FIELD?
        </GoblinH2>
        <SwiperContainer $margin='2rem 0'>
          <Swiper slidesPerView={1.2} spaceBetween={20} centeredSlides='true'>
            {reviewData.map(item => (
              <SwiperSlide key={item.id}>
                <Card $border='true'>
                  <Article>
                    <H3 $margin='1rem 0 2rem 0'>{item.firstQuestion}</H3>
                    <P $margin='2rem 0'>{item.firstAnswer}</P>
                    <WriterContainer>
                      <P color='yellow' size='1.2rem'>
                        {item.school}
                      </P>
                      <P color='yellow' size='1.2rem'>
                        {item.author}
                      </P>
                    </WriterContainer>
                  </Article>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      </FakeSection>
      {/* 지우세요 */}
    </>
  );
}

export default MainPage;
