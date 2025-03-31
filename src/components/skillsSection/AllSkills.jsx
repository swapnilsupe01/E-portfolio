import SingleSkill from "./SingleSkill";
import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiKotlin, SiFlutter,SiPython } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "TailwindCSS", icon: RiTailwindCssFill },
  { skill: "Node.js", icon: FaNode },
  { skill: "Java", icon: FaJava },
  { skill: "Python", icon: SiPython },
  { skill: "Kotlin", icon: SiKotlin },
  { skill: "Flutter", icon: SiFlutter },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => (
          <motion.div
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            key={index}
          >
            <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
