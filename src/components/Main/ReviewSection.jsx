import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';
import {useEffect, useState} from 'react';
import theme from '../../theme';
import {ReviewApi} from '../../lib/Apiservice';

const H2 = styled.h2`
  font-size: 1.875rem;
  margin: ${props => props.$margin || '0'};
  text-align: center;
`;

const GoblinH2 = styled(H2)`
  font-family: 'Goblin One';
  font-size: ${props => props.$size || '1.875rem'};
`;

const SwiperContainer = styled.div`
  width: 100%;
  margin: ${props => props.margin || '0'};
`;

const WriterContainer = styled.div`
  width: 90%;
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 1rem;
  text-align: center;
`;

const Article = styled.article`
  width: 100%;
`;

const Card = styled.article`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${props => props.src});
  background-color: ${theme.colors.blue};
  padding: 1rem;
  background-position: center;
  border-radius: 0.625rem;
  ${props => props.$border && 'border: 2px solid white;'}
  height: 25rem;
  position: relative;
`;

const P = styled.p`
  word-break: keep-all;
  margin: ${props => props.$margin || '0'};
  line-height: 1.5;
  color: ${props => (props.color ? theme.colors[props.color] : '')};
  font-size: ${props => (props.size ? props.size : '1rem')};
  text-align: ${props => props.align || ''};
  font-weight: ${props => props.weight || ''};
`;

const H3 = styled.h3`
  display: flex;
  flex-direction: column;
  font-size: 1.5625rem;
  font-weight: 900;
  margin: ${props => props.$margin || '0'};
`;

function ReviewSection() {
  const [reviewData, setReviewData] = useState([]);
  const EXPIRY_DURATION = 365 * 24 * 60 * 60 * 1000;

  const getReview = async () => {
    try {
      const localData = localStorage.getItem('reviewData');
      const expiryTime = localStorage.getItem('expiryTime');
      if (localData && expiryTime && new Date().getTime() < expiryTime) {
        setReviewData(JSON.parse(localData));
      } else {
        const response = await ReviewApi();
        setReviewData(response);
        localStorage.setItem('reviewData', JSON.stringify(response));
        localStorage.setItem('expiryTime', new Date().getTime() + EXPIRY_DURATION);
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
      <GoblinH2 $margin='8rem 0 2rem 0' $size='1.25rem'>
        How was your FIELD?
      </GoblinH2>
      <SwiperContainer $margin='2rem 0'>
        <Swiper
          modules={[Pagination]}
          slidesPerView={1.2}
          spaceBetween={20}
          centeredSlides='true'
          pagination={{clickable: true}}
        >
          {reviewData.map(item => (
            <SwiperSlide key={item.id}>
              <Card $border='true'>
                <Article>
                  <H3 $margin='0.5rem 0 1rem 0'>{item.firstQuestion}</H3>
                  <P $margin='1rem 0' size='0.875rem'>
                    {item.firstAnswer}
                  </P>
                  <WriterContainer>
                    <P color='yellow' size='1.125rem' weight='800'>
                      {item.school}
                    </P>
                    <P color='yellow' size='1.125rem' weight='800'>
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

export default ReviewSection;
