/* eslint-disable @typescript-eslint/no-unused-vars */
import Orb from "@/blocks/Backgrounds/Orb/Orb";
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { AsyncImage } from "@/components/ui/async-image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Dock } from "@/components/ui/dock-two";
import { Facebook, Github, Twitter, Mail, NotebookText } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Home() {
  //const [animateHero, setAnimateHero] = useState(false);
  const [animateDynamicText, setAnimateDynamicText] = useState(false);
  const [animateDock, setAnimateDock] = useState(false);
  const [addImage, setAddImage] = useState(false);

  const items = [
    { icon: Facebook, label: "Facebook" },
    { icon: Twitter, label: "Twitter" },
    { icon: Github, label: "Github" },
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
    <motion.div className="snap-y snap-mandatory overflow-y-scroll h-screen items-center justify-center">
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen w-full pl-16 snap-center"
        // style={{
        //   justifyContent: animateHero ? "start" : "center",
        // }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.5,
        }}
      >
        <motion.div
          layout
          className="flex flex-col min-h-screen overflow-hidden"
          style={{
            display: "flex",
            width: "100%",
            position: "relative",
          }}
          initial={{}}
        >
          <BackgroundBeams />
          <motion.div
            className="grid grid-cols-2 justify-center items-center ml-28 mr-28"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 0.5,
            }}
          >
            <motion.div className="relative">
              <motion.div className="absolute top-7/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:text-2xl md:text-5xl 2xl:text-8xl ">
                <BlurText
                  text="Hello, I am Frank!"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="relative text-center header text-balance"
                />
                <motion.div
                  className="relative text-9xl text-center header"
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
                      className="sm:text-xl md:text-4xl 2xl:text-5xl"
                    />
                  </motion.span>
                </motion.div>
                <motion.div
                  className="relative text-7xl text-center paragraph"
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
            </motion.div>
            <AnimatePresence>
              {addImage && (
                <motion.div
                  className="relative flex justify-center items-center"
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
                  <AsyncImage
                    src="/ronnie.jpg"
                    alt="Ronnie"
                    className="relative h-auto w-2xl rounded-4xl shadow-lg border-8 border-white"
                    loader={<div style={{ background: "#888" }} />}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen w-6xl pl-16 snap-center"
        // style={{
        //   justifyContent: animateHero ? "start" : "center",
        // }}
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
          <motion.span className="text-7xl mt-8 text-start paragraph">
            Tech Stack
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
