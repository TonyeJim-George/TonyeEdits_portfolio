import React, { useRef, useState } from "react";
import IphoneFrame from "./IphoneFrame";
import { Volume2, VolumeX, ChevronLeft, ChevronRight } from "lucide-react";

const VideoSlider: React.FC = () => {
  const [mutedStates, setMutedStates] = useState<{ [key: string]: boolean }>(
    {}
  );
  const sliderRef = useRef<HTMLDivElement>(null);

  const videos = [
    "https://res.cloudinary.com/do2jxpjdn/video/upload/v1745688063/images/portraits/Groom_s_staircase_transition_tqas9j.mov",
    "https://res.cloudinary.com/do2jxpjdn/video/upload/v1745688204/images/portraits/With_our_parents_vs_with_our_friends_css571.mov",
    "https://res.cloudinary.com/do2jxpjdn/video/upload/v1745687869/images/portraits/Bride_shoes_transition_ectxdq.mov",
    "https://res.cloudinary.com/do2jxpjdn/video/upload/v1743618888/images/portraits/Mum_birthday_short_edit_wc6a7l.mp4",
    "https://res.cloudinary.com/do2jxpjdn/video/upload/v1745688101/Bridesmaid_reveal_bride_yvqnfy.mov",
    "https://res.cloudinary.com/do2jxpjdn/video/upload/v1745688192/Wedding_edit_d7atly.mov",
    "https://res.cloudinary.com/do2jxpjdn/video/upload/v1743618942/images/portraits/Sad_moments_nuqiat.mp4",
  ];

  const toggleMute = (videoId: string) => {
    setMutedStates((prev) => {
      const newMutedStates: { [key: string]: boolean } = {};
      videos.forEach((_, index) => {
        newMutedStates[index.toString()] = true;
      });
      newMutedStates[videoId] = !prev[videoId];
      return newMutedStates;
    });
  };

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 400;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full overflow-hidden touch-pan-x">
      {/* Left Scroll Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full hover:bg-black/80 transition z-10 backdrop-blur-md"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      {/* Video Scroll Section */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto no-scrollbar space-x-4 p-4 snap-x snap-mandatory scroll-smooth"
      >
        {videos.map((video, index) => {
          const isMuted = mutedStates[index.toString()] !== false;

          return (
            <div
              key={index}
              className="relative min-w-[300px] snap-center rounded-2xl overflow-hidden"
            >
              <IphoneFrame>
                <video
                  src={video}
                  className="w-full h-full object-cover rounded-xl"
                  autoPlay
                  loop
                  muted={isMuted}
                  controls
                  playsInline // ✅ Required for iOS autoplay without fullscreen
                  preload="metadata" // ✅ Efficient loading behavior
                />
                <button
                  onClick={() => toggleMute(index.toString())}
                  className="absolute bottom-4 left-4 z-20 bg-black/60 p-2 rounded-full hover:bg-black/80 transition-colors backdrop-blur"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-white" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-white" />
                  )}
                </button>
              </IphoneFrame>
            </div>
          );
        })}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full hover:bg-black/80 transition z-10 backdrop-blur-md"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default VideoSlider;
