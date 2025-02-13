import { Sidebar } from "@/components/Sidebar";
import { AboutMe } from "@/components/AboutMe";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container max-w-screen-lg mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar Section (Profile + Projects) */}
          <div className="md:col-span-1">
            <Sidebar />
            <Projects /> {/* Moved Projects under Sidebar */}
          </div>

          {/* Main Section (Skills + Experience) */}
          <main className="md:col-span-2">
            <Skills />
            <Experience />
          </main>
        </div>
      </div>
    </div>
  );
}