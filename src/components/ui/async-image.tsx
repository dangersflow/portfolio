/* eslint-disable @typescript-eslint/no-explicit-any */
import { InView } from "react-intersection-observer";
import { Image } from "./image";
import styled from "styled-components";
import { motion } from "motion/react";

const StyledAsyncImage = styled(motion.div)`
  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const AsyncImage = (imageProps: any) => {
  return (
    <InView triggerOnce>
      {({ ref, inView }) => (
        <StyledAsyncImage ref={ref}>
          <Image inView={inView} {...imageProps} />
        </StyledAsyncImage>
      )}
    </InView>
  );
};
