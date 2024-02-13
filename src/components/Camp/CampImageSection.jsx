import React from 'react';

function CampImageSection() {
  return (
    <div>
      <BackgroundImage position='relative' height='80vh' src={campBackgroundImage1}>
        <FlexCenter pl='10%' pr='10%'>
          <H3 margin='0 0 2rem 0'>ON/OFF blended</H3>
          <Span margin='0 0 1rem 0' size='1.25rem'>
            본 캠프 2박 3일을 포함하여
          </Span>
          <Span margin='0 0 1rem 0' size='1.25rem'>
            사전 데모데이를 통해{' '}
          </Span>
          <Span margin='0 0 1rem 0' size='1.25rem'>
            {' '}
            팀원들과 친해지세요.
          </Span>
        </FlexCenter>
      </BackgroundImage>
    </div>
  );
}

export default CampImageSection;
