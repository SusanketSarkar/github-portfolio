import { Skills } from "./Skills";
import { Profile } from "./Profile";
import { Experience } from "./Experience";


export const Sidebar = () => {
    return (
        <aside className="md:col-span-1">
            {/* Profile Section */}
            < Profile />
            {/* Skills Section
            <Experience /> */}
        </aside>
    )
}