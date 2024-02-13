import React from 'react';
import CampMainSection from '../components/Camp/CampMainSection';
import CampIntroSection from '../components/Camp/CampIntroSection';
import Camp1 from '../assets/camp1.png';
import Camp2 from '../assets/camp2.png';
import Camp3 from '../assets/camp3.png';
import CampImageSection from '../components/Camp/CampImageSection';

function CampPage() {
  return (
    <main>
      <CampMainSection />
      <CampIntroSection />
      <CampImageSection
        title='ON/OFF blended'
        img={Camp1}
        label1='본 캠프는 2박 3일을 포함하여'
        label2='사전 데모데이를 통해 팀원들과'
        label3='친해지세요.'
      />
      <CampImageSection
        title='Various Program'
        img={Camp2}
        label1='다양한 인적 교류 활성화'
        label2='프로그램을 진행합니다.'
      />
      <CampImageSection
        title='Connection with Professor'
        img={Camp3}
        label1='산업공학과 출신 기업인,'
        label2='교수님과 소통하세요'
      />
    </main>
  );
}

export default CampPage;
