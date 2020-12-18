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
  }
`;

export const SplashTitle = styled.h1`
  color: ${(props) => props.theme.primaryLightColor};
  font-size: 60px;
`;
