"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useMediaQuery from "@/hook/useMediaQuery";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiKaggle } from "react-icons/si";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export const Profile = () => {
  const isDesktopOrLaptop = useMediaQuery("(min-width: 1224px)");
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-start gap-2 ">
          <div className="w-full flex flex-row justify-between items-top">
            <div className="flex flex-row md:flex-col items-center md:items-start w-full gap-4">
              <Image
                width={150}
                height={150}
                quality={100}
                src="/avatar.jpg"
                alt="Profile Picture"
                className="rounded-full size-12 md:w-full h-auto object-cover border-2"
              />
              <div className="flex flex-col items-start justify-center">
                <h1 className="font-bold md:mt-4 text-xl md:text-2xl">
                  Susanket Sarkar
                </h1>
                <p className="text-sm md:text-base text-muted-foreground">
                  Data Scientist
                </p>
              </div>
            </div>
            {!isDesktopOrLaptop && <ThemeSwitcher />}
          </div>

          <p className="mt-2 text-start text-sm text-muted-foreground">
            I am an Engineer who is quite enthusiastic about the data behind product decisions and I love to delve deeper into machine learning and deep learning problems.
          </p>

          {/* Resume Button opens Modal */}
          <Dialog open={isResumeOpen} onOpenChange={setIsResumeOpen}>
        <DialogTrigger asChild>
            <Button className="mt-4 w-full font-semibold uppercase">
            Resume
            </Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
            <DialogHeader>
            <DialogTitle>Resume</DialogTitle>
            </DialogHeader>
            
            {/* Display Resume Image */}
            <div className="flex justify-center">
            <iframe
                src="/resume.png"
                className="w-full h-[600px] object-contain"
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Export Button */}
            <div className="flex justify-end mt-4">
            <a href="/resume.pdf" download="Susanket_Sarkar_Resume.pdf">
                <Button className="font-semibold uppercase">
                Export PDF
                </Button>
            </a>
            </div>
        </DialogContent>
        </Dialog>

          {/* Socials
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