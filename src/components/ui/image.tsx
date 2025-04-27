/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export const Image = ({ inView, ...imageProps }: any) => {
  const [status, setStatus] = useState("loading");

  return (
    <>
      {status === "loading" && <div>loading...</div>}
      {inView && (
        <img
          {...imageProps}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("failed")}
        />
      )}
      {status === "failed" && <div>error</div>}
    </>
  );
};
