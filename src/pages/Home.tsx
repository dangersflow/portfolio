/* eslint-disable @typescript-eslint/no-unused-vars */
import Orb from "@/blocks/Backgrounds/Orb/Orb";
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { AsyncImage } from "@/components/ui/async-image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Dock } from "@/components/ui/dock-two";
import { Github, Mail, NotebookText, Linkedin } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import styled from "styled-components";

// Responsive grid system
const StyledGridContainer = styled(motion.div)`
  display: grid;
  max-width: 2272px;
  width: 100%;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
    max-width: min(95%, 2272px); /* Ensures grid doesn't stretch to extreme widths */
  }

  @media (min-width: 1200px) {
    gap: 3rem;
    max-width: min(90%, 2272px);
  }

  @media (min-width: 2100px) {
    gap: 4rem;
    max-width: min(85%, 2272px);
  }
`;

// Responsive image styling - 70% size to balance with hero
const StyledAsyncImage = styled(AsyncImage)`
  width: 70%; /* Reduced from 100% to 70% */
  max-width: 70%; /* Reduced from 100% to 70% */
  height: auto;
  
  @media (max-width: 700px) {
    width: 80%;
    margin: 0 auto;
  }
`;

// Hero container - reverted text scaling
const StyledHeroContainer = styled(motion.div)`
  width: 100%;
  position: relative;
  min-width: 0; /* Prevents flexbox from expanding beyond grid cell */

  @media (max-width: 700px) {
    .header {
      font-size: 4rem;
    }

    .paragraph {
      font-size: 2rem;
    }
  }
`;

const StyledHomeContainer = styled(motion.div)`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  padding-left: 64px; /* Add padding for sidebar */
  
  @media (max-width: 700px) {
    scroll-snap-type: none;
    overflow-x: hidden;
  }
`;

// Image container styling - ensures the image is 70% of its container
const StyledImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-width: 0; /* Prevents flexbox from expanding beyond grid cell */
  margin: 0 auto;
`;

export default function Home() {
  //const [animateHero, setAnimateHero] = useState(false);
  const [animateDynamicText, setAnimateDynamicText] = useState(false);
  const [animateDock, setAnimateDock] = useState(false);
  const [addImage, setAddImage] = useState(false);

  const items = [
    { icon: Linkedin, label: "LinkedIn", onClick: () => window.open("https://www.linkedin.com/in/francisco-gonzalez-861333134/", "_blank") },
    { icon: Github, label: "Github", onClick: () => window.open("https://github.com/dangersflow", "_blank") },
    { icon: Mail, label: "Mail" },
    { icon: NotebookText, label: "Resume" },
  ];

  useEffect(function animateDynamicText() {
    setTimeout(() => {
      setAnimateDynamicText(true);
    }, 1500);
  }, []);

  useEffect(function animateDock() {
    setTimeout(() => {
      setAnimateDock(true);
    }, 2000);
  }, []);

  useEffect(function addImage() {
    setTimeout(() => {
      setAddImage(true);
    }, 2500);
  }, []);

  return (
    <StyledHomeContainer>
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen w-full snap-center"
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.5,
        }}
      >
        <motion.div
          layout
          className="flex flex-col min-h-screen justify-center items-center"
          style={{
            width: "100%",
            position: "relative",
          }}
          initial={{}}
        >
          <BackgroundBeams />
          <StyledGridContainer
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 0.5,
            }}
          >
            <StyledHeroContainer className="relative">
              <motion.div className="absolute top-7/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:text-2xl md:text-5xl 2xl:text-8xl ">
                <BlurText
                  text="Hello, I am Frank!"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="relative text-center header text-balance"
                />
                <motion.div
                  className="relative text-center header mt-9"
                  initial={{
                    opacity: 0,
                    y: -50,
                    filter: "blur(8px)",
                  }}
                  animate={{
                    opacity: animateDynamicText ? 1 : 0,
                    y: animateDynamicText ? 0 : -50,
                    filter: animateDynamicText ? "blur(0px)" : "blur(8px)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: 0.5,
                  }}
                >
                  <motion.span className="relative text-left paragraph sm:text-xl md:text-4xl 2xl:text-5xl">
                    I am a{" "}
                    <AnimatedTextCycle
                      words={["developer", "designer", "creator", "builder"]}
                      interval={3500}
                      className="sm:text-xl md:text-4xl 2xl:text-5xl paragraph"
                    />
                  </motion.span>
                </motion.div>
                <motion.div
                  className="relative text-center paragraph"
                  initial={{
                    opacity: 0,
                    y: -50,
                  }}
                  animate={{
                    opacity: animateDock ? 1 : 0,
                    y: animateDock ? 0 : -50,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: 0.5,
                  }}
                >
                  <Dock items={items} />
                </motion.div>
              </motion.div>
              <Orb
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}
              />
            </StyledHeroContainer>
            <AnimatePresence>
              {addImage && (
                <StyledImageContainer
                  initial={{
                    opacity: 0,
                    y: -50,
                    rotate: 0,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotate: -5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 60,
                    mass: 1,
                    restDelta: 0.001,
                  }}
                >
                  <StyledAsyncImage
                    src="/ronnie.jpg"
                    alt="Ronnie"
                    className="h-auto rounded-4xl shadow-lg border-8 border-white"
                    loader={<div style={{ background: "#888" }} />}
                  />
                </StyledImageContainer>
              )}
            </AnimatePresence>
          </StyledGridContainer>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen w-full snap-center"
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.5,
        }}
      >
        <motion.div
          layout
          className="flex flex-col min-h-screen"
          style={{
            display: "flex",
            width: "100%",
            position: "relative",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 100,
            mass: 1,
          }}
        >
          <motion.span className="text-7xl mt-8 text-start paragraph px-8">
            Tech Stack
          </motion.span>
        </motion.div>
      </motion.div>
    </StyledHomeContainer>
  );
}
