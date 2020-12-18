import React from 'react';
import {
  TrendingWrapper,
  TrendingTitle,
  TrendingContainer,
} from './TrendingElements';

const Trending = () => (
  <>
    <TrendingWrapper>
      <TrendingTitle>Trending Jobs</TrendingTitle>
      <TrendingContainer>
        test 123
        {/* map thru trending items here */}
      </TrendingContainer>
    </TrendingWrapper>
  </>
);
export default Trending;
