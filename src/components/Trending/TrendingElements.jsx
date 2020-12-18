/* eslint-disable */
import styled from 'styled-components';


export const TrendingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  white-space: nowrap;
  align-items: center;
  min-height: 35vh;
  margin: 0 auto;
  background:${(props) => props.theme.primaryLightBackgroundColor};
`

export const TrendingTitle = styled.h1`
  text-align: center;
`

export const TrendingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: #000;
`;