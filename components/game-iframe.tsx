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
        src="https://eggycarofficial.com/game/d18030e3-35a6-4846-a4a5-ca65e5e0aa1e/index.html?game_id=9f1b16bc-cacf-4309-8d46-2ff2d6671e12&amp;game_version_id=d18030e3-35a6-4846-a4a5-ca65e5e0aa1e&amp;referrer="
      ></iframe>
      <div className="text-center flex items-center justify-center mt-6">
        <Button>Viw Full Screen</Button>
      </div>
    </>
  );
}
