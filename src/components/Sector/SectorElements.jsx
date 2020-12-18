/* eslint-disable */
import styled from 'styled-components';
export const SectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  white-space: nowrap;
  align-items: center;
  min-height: 50vh;
  margin: 0 auto;
  background:${(props) => props.theme.primaryLightBackgroundColor};
`

export const SectorTitle = styled.h1`
  color: ${(props) => props.theme.darkTextColor};
  text-align: center;
  border-bottom: 2px solid ${(props) => props.theme.secondaryBlueColor};
`

export const SectorWrapper = styled.div`
   display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: #000;
`