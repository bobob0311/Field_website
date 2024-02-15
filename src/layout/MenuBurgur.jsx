import styled, {keyframes, css} from 'styled-components';
import theme from '../theme';

const downRight = keyframes`
  0% {
    transform: rotate(0deg) ;
    transform-origin: left top; 
  }
  100% {
    transform: rotate(45deg) translate(11px,-13px);
    transform-origin: left top; 
  }
`;

const upLeft = keyframes`
  0% {
    transform: rotate(0deg) ;
    transform-origin: left bottom; 
  }
  100% {
    transform: rotate(-45deg) translate(11px,13px);
    transform-origin: left bottom;
  }
`;

const RotatingLines = styled.svg`
  width: 50px;
  height: 50px;
`;

const RotatingGroup = styled.g`
  stroke: ${theme.colors.white};
  stroke-width: 4;
`;

const RotatingLine = styled.line`
  stroke: ${theme.colors.white};
  stroke-width: 4;
  display: ${({open}) => (open ? 'none' : '')};
`;

const RotatingLineTop = styled.line`
  stroke: ${theme.colors.white};
  stroke-width: 4;
  animation: ${({open}) =>
    open
      ? css`
          ${downRight} 0.3s forwards
        `
      : 'none'};
`;

const RotatingLineBottom = styled.line`
  stroke: ${theme.colors.white};
  stroke-width: 4;
  animation: ${({open}) =>
    open
      ? css`
          ${upLeft} 0.3s forwards
        `
      : 'none'};
`;

export default function MenuBurgur(props) {
  const {open} = props;

  return (
    <RotatingLines xmlns='http://www.w3.org/2000/svg'>
      <RotatingGroup>
        <RotatingLineTop open={open} x1='5' y1='12.5' x2='45' y2='12.5' />
        <RotatingLine open={open} x1='5' y1='25' x2='45' y2='25' />
        <RotatingLineBottom open={open} x1='5' y1='37.5' x2='45' y2='37.5' />
      </RotatingGroup>
    </RotatingLines>
  );
}
