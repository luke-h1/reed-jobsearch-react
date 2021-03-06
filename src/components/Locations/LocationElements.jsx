/* eslint-disable */
import styled from 'styled-components';

export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  white-space: nowrap;
  align-items: center;
  min-height: 35vh;
  margin: 0 auto;
  background: ${(props) => props.theme.primaryLightBackgroundColor};
`;

export const LocationTitle = styled.h1`
  text-align: center;
  border-bottom: 2px solid ${(props) => props.theme.secondaryBlueColor};
`;

export const LocationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: #000;
`;
