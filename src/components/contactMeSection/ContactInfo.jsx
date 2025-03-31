import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="swapnilsupe01@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 8422958015" Image={FiPhone} />
      <SingleInfo text="Navi Mumbai, India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;