// import { Link } from "react-scroll";

// const AboutMeText = () => {
//   return (
//     <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
//       <h2 className="text-6xl text-cyan mb-10">About Me</h2>
//       <p>
//         I’m Swapnil Supe, a web developer with a passion for teaching
//         and coding. I specialize in React and front-end development, helping
//         students build real-world projects and master modern web technologies. I
//         also run a Import Export Business and i love toward successful my career
//         in tech and business. Outside of coding, I enjoy continuous playing cricket and
//         football.
//       </p>
//       <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
//         <Link
//           spy={true}
//           smooth={true}
//           duration={500}
//           offset={-120}
//           to="projects"
//           className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
//         >
//           My Projects
//         </Link>
//       </button>
//     </div>
//   );
// };

// export default AboutMeText;


import { Link } from "react-scroll";
import { FaDownload } from "react-icons/fa"; // Import download icon

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Swapnil Supe, a web developer with a passion for teaching
        and coding. I specialize in React and front-end development, helping
        students build real-world projects and master modern web technologies. I
        also run an Import-Export Business and I love moving toward success in
        tech and business. Outside of coding, I enjoy playing cricket and
        football.
      </p>

      <div className="flex gap-4 mt-10">
        {/* My Projects Button */}
        <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center hover:bg-orange transition-all duration-500 cursor-pointer">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            to="projects"
            className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
          >
            My Projects
          </Link>
        </button>

        {/* Download CV Button with Icon */}
        <button className="bg-orange text-white rounded-full py-2 px-5 text-lg flex gap-2 items-center hover:bg-orange/80 transition-all duration-500 cursor-pointer">
          <a
            href="public/Swapnil_Supe_Resume.pdf" // Make sure the file is placed in the /public folder
            download="Swapnil_Supe_CV.pdf"
            className="flex items-center gap-2"
          >
            <FaDownload size={20} /> Download CV
          </a>
        </button>
      </div>
    </div>
  );
};

export default AboutMeText;
