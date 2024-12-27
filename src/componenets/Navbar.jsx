import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaL } from "react-icons/fa6";
const Navbar = () => {
  return(
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            {/* <img src="https://www.tailwind-kit.com/images/logo.svg" alt="logo" className="w-10 h-10" /> */}
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin/>
            <FaGithub/>
        </div>
    </nav>
  );
}

export default Navbar