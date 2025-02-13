import { Skills } from "./Skills";
import { Profile } from "./Profile";
import { Experience } from "./Experience";

import { SocialIcons } from "@/components/SocialIcons";

export const Sidebar = () => {
  return (
    <div className="relative"> {/* Wrap Sidebar in a relative div */}
      {/* Sidebar Content */}
      <div className="bg-card p-6 rounded-xl shadow-md">
        {/* Your existing profile, about, and other content */}
        <Profile/>
      </div>

      {/* Social Icons - Positioned to the Side */}
      <div className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 space-y-4">
        <SocialIcons />
      </div>
    </div>
  );
};