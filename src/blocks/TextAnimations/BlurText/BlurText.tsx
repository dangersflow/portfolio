/* eslint-disable @typescript-eslint/no-explicit-any */
/*
	Installed from https://reactbits.dev/ts/tailwind/
*/

import { useRef, useEffect, useState, memo } from "react";
import { useSprings, animated, SpringValue } from "@react-spring/web";

const AnimatedSpan = animated.span as React.FC<
  React.HTMLAttributes<HTMLSpanElement>
>;

interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, any>;
  animationTo?: Record<string, any>[];
  easing?: (t: number) => number | string;
  onAnimationComplete?: () => void;
}

const BlurText: React.FC<BlurTextProps> = memo(
  ({
    text = "",
    delay = 200,
    className = "",
    animateBy = "words",
    direction = "top",
    threshold = 0.1,
    rootMargin = "0px",
    animationFrom,
    animationTo,
    easing = "easeOutCubic",
    onAnimationComplete,
  }) => {
    const elements = animateBy === "words" ? text.split(" ") : text.split("");
    const [inView, setInView] = useState(false);
    const [animationTriggered, setAnimationTriggered] = useState(false);
    const ref = useRef<HTMLParagraphElement>(null);
    const animatedCount = useRef(0);

    // Default animations based on direction
    const defaultFrom: Record<string, any> =
      direction === "top"
        ? {
            filter: "blur(10px)",
            opacity: 0,
            transform: "translate3d(0,-50px,0)",
          }
        : {
            filter: "blur(10px)",
            opacity: 0,
            transform: "translate3d(0,50px,0)",
          };

    const defaultTo: Record<string, any>[] = [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        transform:
          direction === "top"
            ? "translate3d(0,5px,0)"
            : "translate3d(0,-5px,0)",
      },
      { filter: "blur(0px)", opacity: 1, transform: "translate3d(0,0,0)" },
    ];

    useEffect(() => {
      // Only set up the observer if animation hasn't been triggered yet
      if (animationTriggered) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !animationTriggered) {
            setInView(true);
            setAnimationTriggered(true);
            if (ref.current) {
              observer.unobserve(ref.current);
            }
          }
        },
        { threshold, rootMargin }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, [threshold, rootMargin, animationTriggered]);

    const springs = useSprings(
      elements.length,
      elements.map((_, i) => ({
        from: animationFrom || defaultFrom,
        to: inView
          ? async (
              next: (arg: Record<string, SpringValue<any>>) => Promise<void>
            ) => {
              for (const step of animationTo || defaultTo) {
                await next(step);
              }
              animatedCount.current += 1;
              if (
                animatedCount.current === elements.length &&
                onAnimationComplete
              ) {
                onAnimationComplete();
              }
            }
          : animationFrom || defaultFrom,
        delay: i * delay,
        config: { easing: easing as any },
      }))
    );

    return (
      <p
        ref={ref}
        className={`blur-text ${className} flex flex-wrap justify-center`}
      >
        {springs.map((props, index) => (
          <AnimatedSpan
            key={index}
            style={props}
            className="inline-block will-change-[transform,filter,opacity]"
          >
            {elements[index] === " " ? "\u00A0" : elements[index]}
            {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
          </AnimatedSpan>
        ))}
      </p>
    );
  }
);

export default BlurText;
