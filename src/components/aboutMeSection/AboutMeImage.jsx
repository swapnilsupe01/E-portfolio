// const AboutMeImage = () => {
//     return (
//       <div className="h-[500px] w-[300px] relative">
//         <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
//           <img
//             src="../../images/about-me.jpg"
//             alt="About Me Image"
//             className="h-full w-auto object-cover"
//           />
//         </div>
//         <div className="h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
//       </div>
//     );
//   };
  
//   export default AboutMeImage;

const AboutMeImage = () => {
  return (
    <div className="relative w-[300px] h-[500px] flex justify-center items-center">
      <div className="relative w-full h-full rounded-[100px] overflow-hidden">
        <img
          src="/images/about.jpeg" // ✅ Make sure the image is inside "public/images/about.jpeg"
          alt="About Me"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-[-30px] left-[-30px] w-[250px] h-[500px] bg-orange rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
};

export default AboutMeImage;


