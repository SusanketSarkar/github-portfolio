import { Skills } from "./Skills";
import { Profile } from "./Profile";
import { Experience } from "./Experience";

import { SocialIcons } from "@/components/SocialIcons";

export const Sidebar = () => {
  return (
    <div className="relative"> {/* Wrap Sidebar in a relative div */}
      {/* Profile Component (already has Card styling internally) */}
      <Profile/>

      {/* Social Icons - Fixed to viewport center */}
      <div className="fixed left-[30px] top-1/2 transform -translate-y-1/2 space-y-2 z-10">
        <SocialIcons />
      </div>
    </div>
  );
};