/* eslint-disable */
import styled from 'styled-components';

export const SplashSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.primaryTextColor};
  min-height: 50vh;
  min-width: 100vw;
  padding: 1rem;
  background: ${(props) => props.theme.secondaryBlueColor};
`;

export const SplashGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 100vw;
  min-height: 50vh;
  background-color: ${(props) => props.theme.secondaryBlueColor};
`;

export const SplashContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50%;
  margin-bottom: 0.5rem;
  @media (max-width: 850px) {
    max-width: 80%;
  }
  p {
    margin: 0.7rem 0 0.7rem 0;
    font-size: 20px;
    letter-spacing: 1.6;
    line-height: 2rem;
    color: ${(props) => props.theme.primaryLightColor} !important;
  }
`;

export const SplashTitle = styled.h1`
  color: ${(props) => props.theme.primaryLightColor};
  font-size: 60px;
`;

export const SplashForm = styled.form`
  width:500px;
  margin: 0 auto;
`

export const SplashInput = styled.input`
  padding: 1rem;
`

export const SplashButton = styled.button`
  background: ${({ primary }) => (primary ? '#f26a2e' : '#077bf1')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
  color: #fff;
  font-size: ${({ big }) => (big ? '20px' : '16px')};
  outline: 0;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? '50px' : 'none')};
  &:hover {
    background: ${({ primary }) => (primary ? '#077bf1' : '#f26a2e')};
    transform: translateY(-2px);
  }
  @media (max-width: 900px) {
    display: none;
  }
`

// SplashForm,
// SplashInput,
// SplashButton,