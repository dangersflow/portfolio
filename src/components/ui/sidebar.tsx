import { AnimatePresence, motion } from "motion/react";
import styled from "styled-components";
import { ModeToggle } from "../mode-toggle";
import { useState } from "react";
import { House, Book, Contact } from "lucide-react";
import FrankLogo from "../frank-logo";
import FrankLogoF from "../frank-logo-f";

const StyledSidebar = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: fixed;
  align-items: start;
  justify-content: space-between;
  height: 100vh;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  left: 0;
  top: 0;
  padding: 48px 16px;
  z-index: 1;
`;

export default function Sidebar() {
  const [homeHover, setHomeHover] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);
  const handleHomeHover = () => setHomeHover(!homeHover);
  const handleAboutHover = () => setAboutHover(!aboutHover);
  const handleContactHover = () => setContactHover(!contactHover);

  return (
    <StyledSidebar
      className="bg-primary-foreground"
      initial={{ width: 64 }}
      animate={{ width: isOpen ? 260 : 64 }}
      exit={{ width: 64 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onMouseEnter={openSidebar}
      onMouseLeave={closeSidebar}
      onTap={openSidebar}
      onBlur={closeSidebar}
    >
      <div className="flex flex-col border-b-1-solid-gray-200 gap-12 items-start w-8 ">
        <div className="flex items-center gap-2 h-15">
          <FrankLogoF className="w-8" />
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                exit={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <FrankLogo className="h-15" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <nav className="mt-4">
          <motion.ul className="space-y-2 flex flex-col w-full gap-4">
            <motion.a href="/">
              <motion.li
                className="flex items-center space-x-3 border-t border-b border-input pt-5 pb-5 transition-colors pl-0.5"
                onHoverStart={handleHomeHover}
                onHoverEnd={handleHomeHover}
                whileHover={{
                  backgroundColor: "var(--accent)",
                  cursor: "pointer",
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  },
                }}
                animate={{
                  width: isOpen ? 224 : 32,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <motion.div className="flex items-center justify-center h7 w-7">
                  <House className="h-7 w-7" />
                </motion.div>
                <AnimatePresence mode="popLayout">
                  {isOpen && (
                    <motion.p
                      className="text-lg"
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      exit={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: homeHover ? 10 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      Home
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.li>
            </motion.a>
            <motion.a href="/about">
              <motion.li
                className="flex items-center space-x-3 border-t border-b border-input pt-5 pb-5 transition-colors pl-0.5"
                whileHover={{
                  backgroundColor: "var(--accent)",
                  cursor: "pointer",
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  },
                }}
                onHoverStart={handleAboutHover}
                onHoverEnd={handleAboutHover}
                animate={{
                  width: isOpen ? 224 : 32,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <motion.div className="flex items-center justify-center h7 w-7">
                  <Book className="h-7 w-7" />
                </motion.div>
                <AnimatePresence mode="popLayout">
                  {isOpen && (
                    <motion.p
                      className="text-lg"
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      exit={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: aboutHover ? 10 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        delay: 0.05,
                      }}
                    >
                      About
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.li>
            </motion.a>
            <motion.a href="/contact">
              <motion.li
                className="flex items-center space-x-3 border-t border-b border-input pt-5 pb-5 transition-colors pl-0.5"
                onHoverStart={handleContactHover}
                onHoverEnd={handleContactHover}
                whileHover={{
                  backgroundColor: "var(--accent)",
                  cursor: "pointer",
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  },
                }}
                animate={{
                  width: isOpen ? 224 : 32,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <motion.div className="flex items-center justify-center h7 w-7">
                  <Contact className="h-7 w-7" />
                </motion.div>
                <AnimatePresence mode="popLayout">
                  {isOpen && (
                    <motion.p
                      className="text-lg"
                      layout
                      key={"change-contact"}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      exit={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: contactHover ? 10 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        delay: 0.1,
                      }}
                    >
                      Contact
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.li>
            </motion.a>
          </motion.ul>
        </nav>
      </div>
      <motion.div
        className="flex w-full justify-start flex-nowrap gap-4 whitespace-nowrap"
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          delay: 0.1,
        }}
      >
        <motion.div
          layout
          key={"change-theme"}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <ModeToggle />
        </motion.div>
        <AnimatePresence mode="popLayout">
          {isOpen && (
            <motion.p
              key={"change-theme"}
              className="text-lg"
              initial={{ width: 0, opacity: 0, x: -10 }}
              exit={{ width: 0, opacity: 0, x: -10 }}
              animate={{ width: "auto", opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              Change Theme?
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </StyledSidebar>
  );
}
