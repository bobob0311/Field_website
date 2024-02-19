import PocketBase from 'pocketbase';
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import backgroundImage from '../../public/fieldIntro1.png';
import AnimationExample from '../components/AnimationExample';
import theme from '../theme';

const pb = new PocketBase('https://field.pockethost.io');

const review = await pb.collection('Review').getFullList();

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

const TitleContainer = styled.section`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const H2 = styled.h2`
  font-size: 1.875rem;
  margin: ${props => props.$margin || '0'};
  text-align: center;
`;

const H3 = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  margin: ${props => props.$margin || '0'};
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: ${props => props.$position || ''};
  bottom: 1rem;
`;

const Icon = styled.img`
  width: 1.875rem;
  height: 1.875rem;
  order: 2;
`;

const IconFigcaption = styled.figcaption`
  font-size: 0.625rem;
`;

const Image = styled.img`
  margin: ${props => props.$margin || '0'};
  width: ${props => props.width || ''};
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: ${props => props.radius || ''};
`;

const MainSection = styled.section`
  margin: 0 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const P = styled.p`
  word-break: keep-all;
  margin: ${props => props.$margin || '0'};
  line-height: 1.5;
  color: ${props => (props.color ? theme.colors[props.color] : '')};
  font-size: ${props => (props.size ? props.size : '1rem')};
`;

const Figcaption = styled.figcaption`
  margin: ${props => props.$margin || '0'};
  word-break: keep-all;
  line-height: 1.5;
`;

const Card = styled.article`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.src});
  background-color: ${theme.colors.blue};
  padding: 2rem 1rem;
  background-position: center;
  aspect-ratio: 1/1.3;
  border-radius: 0.625rem;
  ${props => props.$border && 'border: 2px solid white;'}
`;

const CardTitle = styled(H3)`
  display: inline;
  border: 1px solid white;
  border-radius: 0.625rem;
  padding: 0.5rem 2rem;
`;

const SwiperContainer = styled.div`
  width: 100%;
  margin: ${props => props.margin || '0'};
`;

const Article = styled.article`
  width: 100%;
`;

const WriterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function MainPage() {
  return (
    <>
      <AccessibilityHidden>메인페이지</AccessibilityHidden>
      <TitleContainer>
        <AnimationExample text='Lets Lead The Industry To A Broader FIELD' />
        <Figure $position='absolute'>
          <Icon src='./../../public/scrollDown.png' alt='아래로 스크롤하세요' />
          <IconFigcaption>아래로 스크롤하세요</IconFigcaption>
        </Figure>
      </TitleContainer>
      <MainSection>
        <H2 $margin='5rem 0 10rem 0'>OUR GOAL</H2>
        <H3>
          <span>꿈과 비전, 생각을 공유하는</span>
          <span>교류의 장을 만든다</span>
        </H3>
        <Image src='./../../public/fieldLogo.png' alt='필드 로고' $margin='10rem 0 10rem 0' />
      </MainSection>
      <MainSection>
        <Figure>
          <H3 $margin='0 0 2rem 0'>열정으로 뭉친 산업공학도</H3>
          <Image
            src='./../../public/fieldIntro1.png'
            alt='산업공학도'
            width='100%'
            radius='1.875rem'
          />
          <Figcaption $margin='2rem 0'>
            <P>
              열정 가득한 산업공학도들의 모임인 FIELD는 학술적 활동은 물론 인적 교류에도 항상
              열정적으로 참여합니다.
            </P>
          </Figcaption>
        </Figure>
      </MainSection>
      <MainSection>
        <Figure>
          <H3 $margin='0 0 2rem 0'>열정으로 뭉친 산업공학도</H3>
          <Image
            src='./../../public/fieldIntro1.png'
            alt='산업공학도'
            width='100%'
            radius='1.875rem'
          />
          <Figcaption $margin='2rem 0'>
            <P>
              열정 가득한 산업공학도들의 모임인 FIELD는 학술적 활동은 물론 인적 교류에도 항상
              열정적으로 참여합니다.
            </P>
          </Figcaption>
        </Figure>
      </MainSection>
      <MainSection>
        <Figure>
          <H3 $margin='0 0 2rem 0'>열정으로 뭉친 산업공학도</H3>
          <Image
            src='./../../public/fieldIntro1.png'
            alt='산업공학도'
            width='100%'
            radius='1.875rem'
          />
          <Figcaption $margin='2rem 0'>
            <P>
              열정 가득한 산업공학도들의 모임인 FIELD는 학술적 활동은 물론 인적 교류에도 항상
              열정적으로 참여합니다.
            </P>
          </Figcaption>
        </Figure>
      </MainSection>
      <section>
        <H2 $margin='0 10%'>인적, 학술적 교류를</H2>
        <H2 $margin='0 10%'>실현하는 다양한 활동들</H2>
        <SwiperContainer $margin='2rem 0'>
          <Swiper slidesPerView={1.2} spaceBetween={20} centeredSlides='true'>
            <SwiperSlide>
              <Card src={backgroundImage}>
                <CardTitle>LT</CardTitle>
                <P $margin='8rem 0 0 0'>
                  매년 5월경 진행되는 FIELD LT를 통해 다양한 산업공학도들과 함께 인적교류를
                  즐겨보아요
                </P>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card src={backgroundImage}>
                <CardTitle>LT</CardTitle>
                <P $margin='8rem 0 0 0'>
                  매년 5월경 진행되는 FIELD LT를 통해 다양한 산업공학도들과 함께 인적교류를
                  즐겨보아요
                </P>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card src={backgroundImage}>
                <CardTitle>LT</CardTitle>
                <P $margin='8rem 0 0 0'>
                  매년 5월경 진행되는 FIELD LT를 통해 다양한 산업공학도들과 함께 인적교류를
                  즐겨보아요
                </P>
              </Card>
            </SwiperSlide>
          </Swiper>
        </SwiperContainer>
      </section>
      <H2>How was your FIELD?</H2>
      <SwiperContainer $margin='2rem 0'>
        <Swiper slidesPerView={1.2} spaceBetween={20} centeredSlides='true'>
          {review.map(item => (
            <SwiperSlide key={item.id}>
              <Card $border='true'>
                <Article>
                  <H3 $margin='2rem 0 0 0'>{item.firstQuestion}</H3>
                  <P $margin='2rem 0'>{item.firstAnswer}</P>
                  <H3 $margin='2rem 0 0 0'>{item.secondQuestion}</H3>
                  <P $margin='2rem 0'>{item.secondAnswer}</P>
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
    </>
  );
}

export default MainPage;
