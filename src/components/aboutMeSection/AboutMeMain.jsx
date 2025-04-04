// import AboutMeImage from "./AboutMeImage";
// import AboutMeText from "./AboutMeText";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";
// const AboutMeMain = () => {
//   return (
//     <div
//       id="about"
//       className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center"
//     >
//       <motion.div
//         variants={fadeIn("right", 0)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.7 }}
//       >
//         <AboutMeText />
//       </motion.div>
//       <motion.div
//         variants={fadeIn("left", 0)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.7 }}
//       >
//         <AboutMeImage />
//       </motion.div>
//     </div>
//   );
// };

// export default AboutMeMain;








import AboutMeText from "./AboutMeText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import AboutMeImage from "./AboutMeImage"; // ✅ Import the component, not the image file

const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center"
    >
      {/* Text Section */}
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <AboutMeText />
      </motion.div>

      {/* Image Section */}
      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <AboutMeImage /> {/* ✅ Use the component, not the image file */}
      </motion.div>
    </div>
  );
};

export default AboutMeMain;
