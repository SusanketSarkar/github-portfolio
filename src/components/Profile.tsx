"use client";
import { useState } from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export const Profile = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-start gap-2 ">
          <div className="w-full flex flex-row justify-between items-top">
            <div className="flex flex-row md:flex-col items-center md:items-start w-full gap-4">
              <Image
                width={100}
                height={100}
                quality={100}
                src="https://github.com/SusanketSarkar/github-portfolio/blob/main/public/avatar.jpg"
                alt="Profile Picture"
                className="rounded-full size-6 md:w-40 h-40 object-cover border-2"
              />
              <div className="flex flex-col items-start justify-center">
                <h1 className="font-bold md:mt-4 text-xl md:text-2xl">
                  Hi! I&apos;m Susanket
                </h1>
                {/* <p className="text-sm md:text-base text-muted-foreground">
                  Data Scientist
                </p> */}
              </div>
            </div>
          </div>

          <p className="mt-2 text-start text-sm text-muted-foreground">
            I am an Engineer who is quite enthusiastic about the data behind product decisions and I love to delve deeper into machine learning and deep learning problems.
          </p>

          {/* Resume Button opens Modal */}
          <Dialog open={isResumeOpen} onOpenChange={setIsResumeOpen}>
        <DialogTrigger asChild>
            <Button size="sm" className="mt-4 w-full font-semibold uppercase">
            Resume
            </Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
            <DialogHeader>
            <DialogTitle>Resume</DialogTitle>
            </DialogHeader>
            
            {/* Display Resume PDF */}
            <div className="flex justify-center">
            <iframe
                src="/resume.pdf"
                className="w-full h-[600px] object-contain"
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Export Button */}
            <div className="flex justify-end mt-4">
            <a href="https://github.com/SusanketSarkar/github-portfolio/blob/main/public/resume.pdf" download="Susanket_Sarkar_Resume.pdf">
                <Button className="font-semibold uppercase">
                Export PDF
                </Button>
            </a>
            </div>
        </DialogContent>
        </Dialog>

          {/* Socials - commented out for now
          <div className="flex gap-4 mt-4">
            <Link href="https://github.com/yourusername" target="_blank">
              <FaGithub className="text-2xl" />
            </Link>
            <Link href="https://linkedin.com/in/yourprofile" target="_blank">
              <FaLinkedin className="text-2xl" />
            </Link>
            <Link href="https://www.kaggle.com/yourprofile" target="_blank">
              <SiKaggle className="text-2xl" />
            </Link>
            <Link href="mailto:sarkar.susanket@gmail.com">
              <MdEmail className="text-2xl" />
            </Link>
          </div> */}
        </div>
      </CardContent>
    </Card>
  );
};