import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Study Link",
    year: "Mar2022",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "Color Maker App",
    year: "Sept2022",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "#",
  },
  {
    name: "Twinote",
    year: "Jan2023",
    align: "right",
    image: "../../public/images/Twinote.jpg",
    link: "#",
  },
  {
    name: "Blood Bank",
    year: "Nov2024",
    align: "left",
    image: "../../public/images/Bloodimage.jpg",
    link: "#",
  },
  {
    name: "Pc Prodify",
    year: "Jan2025",
    align: "Right",
    image: "../../public/images/website-img-4.jpg",
    link: "#",
  },
  {
    name: "StegaCrypt",
    year: "March2025",
    align: "left",
    image: "../../public/images/encryption-1.jpg",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;