import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export const SocialIcons = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <a href="https://github.com/SusanketSarkar" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-white text-2xl hover:text-gray-400" />
      </a>
      <a href="https://www.linkedin.com/in/susanket-sarkar-b30736228/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-white text-2xl hover:text-gray-400" />
      </a>
      <a href="https://www.kaggle.com/SusanketSarkar" target="_blank" rel="noopener noreferrer">
        <SiKaggle className="text-white text-2xl hover:text-gray-400" />
      </a>
      <a href="mailto:susanketsarkar1140@gmail.com">
        <MdEmail className="text-white text-2xl hover:text-gray-400" />
      </a>
    </div>
  );
};