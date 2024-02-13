import {useEffect} from 'react';
import {motion, useAnimation, AnimatePresence} from 'framer-motion';
import styled from 'styled-components';

const TextGenerateContainer = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
  margin-top: 1rem;
  text-align: center;
  margin: 0 10%;
`;

const AnimationExample = ({text}) => {
  const animationControl = useAnimation();
  const wordsArray = text.split(' ');

  useEffect(() => {
    const animateText = async () => {
      await animationControl.start('visible');
      await animationControl.start('hidden');
    };
    animateText();
  }, [animationControl]);

  return (
    <TextGenerateContainer>
      <AnimatePresence>
        <motion.div
          className='text-container'
          initial='hidden'
          animate='visible'
          exit='hidden'
          variants={{
            visible: {opacity: 1, transition: {duration: 2}},
            hidden: {opacity: 0, y: 20, transition: {duration: 0.5}},
          }}
          onAnimationComplete={() => animationControl.set({opacity: 0})} // 애니메이션 종료 후 opacity 설정
        >
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              className='word'
              variants={{
                visible: {opacity: 1, y: 0},
                hidden: {opacity: 0, y: 20},
              }}
              transition={{duration: 0.5, delay: idx * 0.2}}
            >
              {word}{' '}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </TextGenerateContainer>
  );
};

export default AnimationExample;
