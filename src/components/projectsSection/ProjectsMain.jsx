// import ProjectsText from "./ProjectsText";
// import SingleProject from "./SingleProject";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";

// const projects = [
//   {
//     name: "Study Link",
//     year: "Mar2022",
//     align: "right",
//     image: "../../images/website-img-1.jpg",
//     link: "#",
//   },
//   {
//     name: "Math Game",
//     year: "Sept 2022",
//     align: "left",
//     image: "../../images/website-img-2.webp",
//     link: "https://github.com/swapnilsupe01/Math-Game-/tree/master", // Corrected Link
//   },

//   {
//     name: "Twinote",
//     year: "Jan2023",
//     align: "right",
//     image: "../../images/Twinote.jpg",
//     link: "#",
//   },
//   {
//     name: "Blood Bank",
//     year: "Nov2024",
//     align: "left",
//     image: "../../images/Bloodimage.jpg",
//     link: "#",
//   },
//   {
//     name: "Pc Prodify",
//     year: "Jan2025",
//     align: "Right",
//     image: "../../images/website-img-4.jpg",
//     link: "#",
//   },
//   {
//     name: "StegaCrypt",
//     year: "March2025",
//     align: "left",
//     image: "../../images/encryption-1.jpg",
//     link: "#",
//   },
// ];

// const ProjectsMain = () => {
//   return (
//     <div id="projects" className="max-w-[1200px] mx-auto px-4">
//       <motion.div
//         variants={fadeIn("top", 0)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.7 }}
//       >
//         <ProjectsText />
//       </motion.div>
//       <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
//         {projects.map((project, index) => {
//           return (
//             <SingleProject
//               key={index}
//               name={project.name}
//               year={project.year}
//               align={project.align}
//               image={project.image}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ProjectsMain;


import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Exploading Ball Game",
    year: "Mar2022",
    align: "right",
    image: "../../images/exploadingball.JPG",
    link: "https://exploading-ball-game.vercel.app/",
  },
  {
    name: "Math Game",
    year: "Sept 2022",
    align: "left",
    image: "../../images/Maths Game.JPG",
    link: "https://github.com/swapnilsupe01/Math-Game-/tree/master", // ✅ Corrected GitHub Link
  },
  {
    name: "Collision Simulator",
    year: "Jan2023",
    align: "right",
    image: "../../images/collision-game.JPG",
    link: "https://1-d-collision-simulator.vercel.app/",
  },
  {
    name: "Blood Bank Application",
    year: "Nov2024",
    align: "left",
    image: "../../images/Bloodimage.jpg",
    link: "https://github.com/swapnilsupe01/blood_bank_application",
  },
  {
    name: "Techy Store",
    year: "Jan2025",
    align: "Right",
    image: "../../images/website-img-4.jpg",
    link: "https://github.com/swapnilsupe01/techy_store",
  },
  {
    name: "Building Parallel File Encryptor",
    year: "March2025",
    align: "left",
    image: "../../images/encryption-1.jpg",
    link: "https://github.com/swapnilsupe01/Building-Parallel-File-Encryptor",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4 mb-20">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}  // ✅ Pass the link prop to SingleProject
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
