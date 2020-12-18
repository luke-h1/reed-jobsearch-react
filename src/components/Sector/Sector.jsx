import React from 'react';
import { SectorContainer, SectorTitle, SectorWrapper } from './SectorElements';

const Sector = () => (
  <>
    <SectorContainer>
      <SectorTitle>Search by sector</SectorTitle>
      <SectorWrapper>
        {/* grid items go here  */}
        <p style={{ color: '#000' }}>Grid items go here</p>
      </SectorWrapper>
    </SectorContainer>
  </>
);
export default Sector;
