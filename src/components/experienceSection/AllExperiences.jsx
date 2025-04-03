import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Degree in Computer Engineering",
    company: "Vidyalankar Institute of Technology",
    date: "2024 - Present",
    responsibilities: [
      "Learning Mobile Development, React and TailwindCSS.",
      "Participating in preparing course materials.",
    ],
  },

  {
    job: "Diploma in Computer Engineering",
    company: "BVIT College",
    date: "2022 - 2024",
    responsibilities: [
     "Participating in a research paper competition at Bharati Vidyapeeth, Pune.",
     "A state-level paper competition of Fr. Angel.",
     "I got 84% in diploma.",
    ],
  },
  
  {
    job: "SSC amd HSC Eduction",
    company: "Saraswati Vidyalaya School and Junior College",
    date: "2021",
    responsibilities: [
      "Participated in the school and college cricket team.",
      "Participated in elementary art competitions.",
      "Participated in an abacus competition.",
    ],
  },
  
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;