import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const SocialIcons = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-white text-2xl hover:text-gray-400" />
      </a>
      <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-white text-2xl hover:text-gray-400" />
      </a>
      <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-white text-2xl hover:text-gray-400" />
      </a>
    </div>
  );
};