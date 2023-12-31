import styled from 'styled-components';

import { Button } from '@/components';
import { Control } from '@/modules/Auth/components';
import { COLORS } from '@/theme';

export const SignPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 100vh;
  overflow: hidden;
`;

export const PictureSection = styled.div`
  position: relative;
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.15;
    z-index: 2;
  }
`;

export const Picture = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 90%;
`;

export const FormSection = styled.div`
  position: relative;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
`;

export const FormContentWrapper = styled.div`
  margin-top: 8rem;
`;

export const StyledControl = styled(Control)`
  margin: 0 0 1rem;
`;

export const BackButton = styled(Button)`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  width: 3rem;
  height: 3rem;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;

  &:hover {
    background-color: #34363c;
  }
`;

export const Heading = styled.h2`
  margin: 0 0 1rem;
  text-align: center;
  letter-spacing: 0.4px;
  font-size: 1.75rem;
`;

export const Subheading = styled.h5`
  margin: 0 0 1rem;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 400;
  color: aliceblue;
  letter-spacing: 0.5px;
`;

export const SubmitButton = styled.button<{ bgtype: 'signin' | 'signup' }>`
  cursor: pointer;
  width: 100%;
  height: 3rem;
  margin: 0.75rem 0 0.5rem;
  padding: 0 16px;
  ${({ bgtype }) =>
    `background ${bgtype === 'signup' ? '#ff5566' : '#0b63da'}`};

  color: #f7f7f7;
  border: 0;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  letter-spacing: 1px;
  transition: all 0.375s;
  border-radius: 0.75rem;
  &:hover {
    ${({ bgtype }) =>
      `background ${bgtype === 'signup' ? '#964145' : '#084ba5'}`};
  }

  &:disabled {
    opacity: 0.25;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  backface-visibility: hidden;
`;

export const OrText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 1rem;
  padding: 0;
  position: relative;

  &::before,
  &::after {
    content: '';
    width: 50%;
    height: 1px;
    background-color: ${COLORS.DARK_GREY['500']};
  }

  &::before {
    margin-right: 10px;
  }

  &::after {
    margin-left: 10px;
  }
`;

export const ForgotPasswordButton = styled.button`
  all: unset;
  color: ${COLORS.PRIMARY};
  cursor: pointer;
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HaveAccountText = styled.p`
  color: ${COLORS.FONT};
`;

export const SignInButton = styled.button`
  all: unset;
  color: ${COLORS.PRIMARY};
  cursor: pointer;
`;

export const CopyrightText = styled.p`
  position: absolute;
  right: 2rem;
  bottom: 0;
  opacity: 0.5;
  pointer-events: none;
  color: #a0a6b0;
  font-family: sans-serif !important;
`;
