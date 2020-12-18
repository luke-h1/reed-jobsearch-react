import React from 'react';
import {
  LocationWrapper,
  LocationTitle,
  LocationContainer,
} from './LocationElements';

const Location = () => (
  <>
    <LocationWrapper>
      <LocationTitle>Locations</LocationTitle>
      <LocationContainer>
        Available Locations
        {/* map thru Location items here */}
      </LocationContainer>
    </LocationWrapper>
  </>
);
export default Location;
