import React from 'react';

import {
  SplashSection,
  SplashGrid,
  SplashTitle,
  SplashContainer,
  SplashForm,
  SplashInput,
  SplashButton,
} from './SplashElements';

const Splash = () => (
  <>
    <SplashSection>
      <SplashGrid>
        <SplashTitle>Love Mondays</SplashTitle>
        <SplashContainer>
          <p>Search for xxxxxxx amount of jobs, xxxxx amount posts today</p>
        </SplashContainer>
        <SplashForm>
          <SplashInput />
          <SplashInput />
          <SplashButton>Search Jobs</SplashButton>
        </SplashForm>
      </SplashGrid>
    </SplashSection>
  </>
);
export default Splash;
