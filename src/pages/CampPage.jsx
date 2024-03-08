import React from 'react';
import CampMainSection from '../components/Camp/CampMainSection';
import CampIntroSection from '../components/Camp/CampIntroSection';
import CampImageSection from '../components/Camp/CampImageSection';
import CampTopicSection from '../components/Camp/CampTopicSection';
import Camp1 from '../assets/camp1.png';
import Camp2 from '../assets/camp2.png';
import Camp3 from '../assets/camp3.png';
import CampTimeLine from '../components/Camp/CampTimeLine';

function CampPage() {
  return (
    <main>
      <CampMainSection />
      <CampIntroSection />
      <CampImageSection
        title='ON/OFF blended'
        img={Camp1}
        firstLine='사전 데모데이를 통해 팀원들과'
        secondLine='교류할 수 있는 기회를 제공합니다'
      />
      <CampImageSection
        title='Various Program'
        img={Camp2}
        firstLine='다양한 인적, 학술적 교류 활성화'
        secondLine='프로그램을 진행합니다.'
      />
      <CampImageSection
        title='Connection with Specialist'
        img={Camp3}
        firstLine='산업공학과 출신 기업인,'
        secondLine='교수님과 소통하세요'
      />
      <CampTopicSection />
      <CampTimeLine />
    </main>
  );
}

export default CampPage;
