import styled from 'styled-components';

const Backdrop = styled.div<{ background?: string }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ background }) => background ?? 'rgba(0, 0, 0, 0.8)'};
  z-index: 10;
`;

export default Backdrop;
