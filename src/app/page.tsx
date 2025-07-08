import { Sidebar } from "@/components/Sidebar";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-2">
          {/* First Column - Profile + Skills */}
          <div className="lg:col-span-3">
            <Sidebar />
            <Skills />
          </div>

          {/* Second Column - Experience */}
          <div className="lg:col-span-4">
            <Experience />
          </div>

          {/* Third Column - Projects */}
          <div className="lg:col-span-4">
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}