import React from 'react';
import CertificateCard from './CertificateCard';

const CertificateSection = () => {
  return (
    <div id="certificate" className="flex gap-10 flex-wrap justify-center py-10">
      <CertificateCard 
        title="Programming in Java" 
        pdf="/certificates/Programming In Java.pdf"
      />
      <CertificateCard 
        title="Matlab Certificate" 
        pdf="/certificates/Swapnil_Supe_24102C2006_MATLAB_certificate.pdf" 
      />
      <CertificateCard 
        title="TCS iON Career Edge - Young Professional" 
        pdf="/certificates/Swapnil_Supe_4639643.pdf" 
      />
    </div>
  );
};

export default CertificateSection;
