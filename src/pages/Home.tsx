import Orb from "@/blocks/Backgrounds/Orb/Orb";
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Dock } from "@/components/ui/dock-two";
import { Facebook, Github, Twitter, Mail, NotebookText } from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  const items = [
    { icon: Facebook, label: "Facebook" },
    { icon: Twitter, label: "Twitter" },
    { icon: Github, label: "Github" },
    { icon: Mail, label: "Mail" },
    { icon: NotebookText, label: "Resume" },
  ];
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
          <BackgroundBeams />
          <BlurText
            text="Hello, I am Frank!"
            delay={150}
            animateBy="words"
            direction="top"
            className="absolute text-9xl mt-12 top-5/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center header text-balance"
          />
          <motion.div className="absolute text-9xl mt-16 top-6/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center header">
            <motion.span className="text-6xl text-left paragraph">
              I am a{" "}
              <AnimatedTextCycle
                words={["developer", "designer", "creator", "builder"]}
                interval={3500}
                className="text-6xl"
              />
            </motion.span>
          </motion.div>
          <motion.div className="absolute text-7xl top-9/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center paragraph">
            <Dock items={items} />
          </motion.div>
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
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
