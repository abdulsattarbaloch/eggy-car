"use client";
import React, { useRef } from "react";
import { Button } from "./ui/button";

export default function GameIframe() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const handleFullscreen = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } else if ((iframe as any).mozRequestFullScreen) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (iframe as any).mozRequestFullScreen();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } else if ((iframe as any).webkitRequestFullscreen) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (iframe as any).webkitRequestFullscreen();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } else if ((iframe as any).msRequestFullscreen) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (iframe as any).msRequestFullscreen();
      }
    }
  };

  return (
    <>
      <iframe
        ref={iframeRef}
        className="w-full h-full rounded-sm overflow-hidden"
        title="Eggy Car Unblocked - Game Iframe"
        id="game-iframe"
        src="https://eggycar2.io/eggy-car.embed"
      ></iframe>
      <div className="text-center flex items-center justify-center mt-6">
        <Button onClick={handleFullscreen}>Play Full Screen</Button>
      </div>
    </>
  );
}
