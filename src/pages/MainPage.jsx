import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import ActivityCamp from '../../public/ActivityCamp.png';
import ActivityLT from '../../public/ActivityLt.png';
import ActivitySeminar from '../../public/ActivitySeminar.png';
import ActivitySupport from '../../public/ActivitySupport.png';
import ActivityYoutube from '../../public/ActivityYoutube.png';
import ActivityInterview from '../../public/ActivityInterview.png';
import ActivityIntroduce from '../../public/ActivityIntro.png';
import FieldIntro1 from '../../public/FieldIntro1.png';
import FieldIntro2 from '../../public/FieldIntro2.png';
import FieldIntro3 from '../../public/FieldIntro3.png';
import AnimationExample from '../components/AnimationExample';
import ActivityIntro from '../components/Main/ActivityIntro';
import theme from '../theme';
import FieldIntro from '../components/Main/FieldIntro';
import {ReviewApi} from '../lib/Apiservice';

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

const NanumH3 = styled(H3)`
  font-family: 'Nanum Myeongjo', serif;
  font-weight: 700;
  gap: 2rem;
  font-size: 1.625rem;
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
  margin: 0 7.5%;
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
      <TitleContainer>
        <AnimationExample text='Lets Lead The Industry To A Broader FIELD' />
        <Figure $position='absolute'>
          <Icon src='./../../public/scrollDown.png' />
          <IconFigcaption>아래로 스크롤하세요</IconFigcaption>
        </Figure>
      </TitleContainer>
      <MainSection>
        <GoblinH2 $margin='5rem 0 10rem 0'>OUR GOAL</GoblinH2>
        <NanumH3>
          <span>꿈과 비전, 생각을 공유하는</span>
          <span>교류의 장을 만든다</span>
        </NanumH3>
        <Image src='./../../public/fieldLogo.png' alt='필드 로고' $margin='10rem 0 10rem 0' />
      </MainSection>
      <MainSection>
        <FieldIntro
          title='열정으로 뭉친 산업공학도'
          content='열정 가득한 산업공학도들의 모임인 FIELD는 학술적 활동은 물론 인적 교류에도 항상 열정적으로 참여합니다.'
          backgroundImage={FieldIntro1}
        />
        <FieldIntro
          title='하나 되는 FIELD'
          content='FIELD는 모든 구성원들의 화합을 지향합니다. 이를 통해 FIELD만의 유대감을 형성할 수 있습니다.'
          backgroundImage={FieldIntro2}
        />
        <FieldIntro
          title='오늘보다 더 나은 내일'
          content='내 옆의 동료가 미래에 산업을 이끌어나갈 리더로 함께 성장하기를 바라며 FIELD는 오늘도 더 높은 목표를 향해 나아갑니다.'
          backgroundImage={FieldIntro3}
        />
      </MainSection>
      <section>
        <NanumH2 $margin='2rem 7.5% 1rem 7.5%'>인적, 학술적 교류를</NanumH2>
        <NanumH2 $margin='0 7.5% 2rem 7.5%'>실현하는 다양한 활동들</NanumH2>
        <SwiperContainer $margin='2rem 0'>
          <Swiper slidesPerView={1.2} spaceBetween={20} centeredSlides='true'>
            <SwiperSlide>
              <ActivityIntro
                backgroundImage={ActivityLT}
                title='LT'
                content='매년 5월경 진행되는 FIELD LT를 통해 다양한 산업공학도들과 함께 인적교류를 즐겨보아요!'
              />
            </SwiperSlide>
            <SwiperSlide>
              <ActivityIntro
                backgroundImage={ActivityYoutube}
                title='유튜브'
                content='유튜브 채널을 통해 창의적이고 혁신적인 컨텐츠를 직접 기획하고 제작하는 현장을 경험해보세요!'
              />
            </SwiperSlide>
            <SwiperSlide>
              <ActivityIntro
                backgroundImage={ActivityInterview}
                title='기업인 인터뷰'
                content='산업공학의 다양한 분야에서 활동 중인 전문가들과의 대화를 통해 진로에 대한 영감을 얻고, 현업에서의 성공비법을 배워보세요'
              />
            </SwiperSlide>
            <SwiperSlide>
              <ActivityIntro
                backgroundImage={ActivitySeminar}
                title='세미나'
                content='세미나 활동을 통해 함께하는 학술적인 여정에서 산업공학의 깊이있는 통찰력을 개발하세요.'
              />
            </SwiperSlide>
            <SwiperSlide>
              <ActivityIntro
                backgroundImage={ActivitySupport}
                title='서포터즈'
                content='청년일보 서포터즈로 참여하면 대학생 기자로 성장하는 특별한 기회가 여러분을 기다립니다.'
              />
            </SwiperSlide>
            <SwiperSlide>
              <ActivityIntro
                backgroundImage={ActivityIntroduce}
                title='고교방문설명회'
                content='문제해결 능력을 키우는 산업공학의 매력을 전하며, 진로 선택에 도움을 주고자 합니다. 함께하면서 미래의 혁신을 주도할 준비를 하는 첫걸음을 함께 나아가요!'
              />
            </SwiperSlide>
            <SwiperSlide>
              <ActivityIntro
                backgroundImage={ActivityCamp}
                title='필드캠프'
                content='매년 8월, 다양한 산업공학도들과 함께 인적, 학술적 교류의 기회를 제공합니다. 우리와 함께 미래를 열어가는 여정에 참여하세요!'
              />
            </SwiperSlide>
          </Swiper>
        </SwiperContainer>
      </section>
      <GoblinH2 $margin='2rem 0' $size='1.25rem'>
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
    </>
  );
}

export default MainPage;
