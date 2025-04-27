/* eslint-disable @typescript-eslint/no-explicit-any */
import { InView } from "react-intersection-observer";
import { Image } from "./image";

export const AsyncImage = (imageProps: any) => {
  return (
    <InView triggerOnce>
      {({ ref, inView }) => (
        <div ref={ref}>
          <Image inView={inView} {...imageProps} />
        </div>
      )}
    </InView>
  );
};
