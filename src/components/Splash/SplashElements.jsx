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
  background: ${(props) => props.theme.primaryBackgroundColor};
`;

