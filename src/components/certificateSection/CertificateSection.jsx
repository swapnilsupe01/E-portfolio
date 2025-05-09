import React from 'react';
import CertificateCard from './CertificateCard';

const CertificateSection = () => {
  return (
    <div id="certificate" className="flex flex-col items-center mt-40 py-10">
      <h2 className="text-6xl text-cyan mb-10">Certificate</h2>
      <div className="flex gap-10 flex-wrap justify-center">
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
         <CertificateCard 
          title="Sql- Island Certifiacte" 
          pdf="/certificates/Certificate_SQL-Island.pdf" 
        />
      </div>
    </div>
  );
};

export default CertificateSection;
