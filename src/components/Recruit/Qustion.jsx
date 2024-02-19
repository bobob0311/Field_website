import {useState} from 'react';

import styled from 'styled-components';
import theme from '../../theme';

const Box = styled.button`
  text-align: left;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 0.65rem;
  color: ${theme.colors.black};
  width: 100%;
  padding: 0.5rem 0;
  margin: 0 0 1.5rem 0;
`;

const P = styled.p`
  width: 90%;
  font-size: ${props => (props.fontSize ? props.fontSize : '0.75rem')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '700')};
  margin: 0.5rem 0 0.5rem 0;
  word-break: keep-all;
  text-indent: -0.5rem;
  padding: 0 0 0 1rem;
`;

const DownImg = styled.img`
  margin: 0 0.5rem 0 0;
`;

const QueBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Question({qes, ans}) {
  const [toggle, setToggle] = useState(false);
  function toggleHandler() {
    setToggle(!toggle);
  }
  return (
    <Box onClick={() => toggleHandler()}>
      <QueBox>
        <P fontSize='0.875rem' fontWeight='900'>
          {qes}
        </P>
        <DownImg src='Expand_down.png' />
      </QueBox>
      {toggle && <P>{ans}</P>}
    </Box>
  );
}
