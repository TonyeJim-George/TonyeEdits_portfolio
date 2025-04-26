import React, { useEffect, useState } from "react";
import {
  faInstagram,
  faTiktok,
  faYoutube,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TypewriterComponent from "./components/TypewriterComponent";
import VideoSlider from "./components/VideoSlider";
import VideoGrid from "./components/VideoGrid";
import ContactForm from "./components/ContactForm";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-300 font-dm-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-white p-4 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <h1
            className={`text-6xl md:text-8xl font-bold mb-8 transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            TONYE EDITS
          </h1>
          <TypewriterComponent
            words={[
              "Filmmaker",
              "Mobile Videographer",
              "BTS Videographer",
              "Creative Director",
            ]}
            className="text-2xl md:text-3xl text-purple-100"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen bg-white/10 backdrop-blur-lg p-8 md:p-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://res.cloudinary.com/do2jxpjdn/image/upload/v1743693830/images/VIDEOGRAPHY%20PORTFOLIO/ABOUT_ME_brtgcp.jpg"
              alt="Tonye Jim-George"
              className="w-full h-auto"
            />
          </div>
          <div className="text-white space-y-6">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                I'm Tonye Jim-George, a passionate filmmaker, videographer, and
                creative director. My journey into filmmaking began early—I
                created my first short film at just 16 years old. Since then, I
                have grown into a YouTuber, content creator, scriptwriter, and
                director, dedicated to bringing compelling stories to life.
              </p>
              <p>
                Beyond personal projects, I have led creative teams in different
                capacities. As the Public Relations Officer (PRO) of the Babcock
                University Students' Association (BUSA), I served as the
                creative director of the media team, overseeing graphic design,
                videography, and photography. I also held the role of PRO for
                Classic World Creations, where I was the creative head of the
                media team, ensuring high-quality production in various
                projects.
              </p>
              <p>
                My work extends to behind-the-scenes videography, where I played
                a key role in capturing the making of the YouTube series 'Young
                Life'—a series centered on life lessons. With every project, I
                strive to tell stories that resonate, inspire, and leave a
                lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            My Projects
          </h2>
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-white text-center mb-8">
              Portrait Videos
            </h3>
            <VideoSlider />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white text-center mb-8">
              Landscape Videos
            </h3>
            <VideoGrid />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen bg-white/10 backdrop-blur-lg py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Let's Connect
          </h2>
          <div className="flex justify-center gap-8 mb-12">
            <a
              href="https://instagram.com/Tonye_jimgeorge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="text-white hover:text-purple-200 transition-colors"
              />
            </a>
            <a
              href="https://tiktok.com/@Tonye_jimgeorge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTiktok}
                size="2x"
                className="text-white hover:text-purple-200 transition-colors"
              />
            </a>
            <a
              href="https://snapchat.com/add/Tonye_jg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faSnapchat}
                size="2x"
                className="text-white hover:text-purple-200 transition-colors"
              />
            </a>
            <a
              href="https://youtube.com/@tonye_jimgeorge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                size="2x"
                className="text-white hover:text-purple-200 transition-colors"
              />
            </a>
            <a href="mailto:jimgeorgedivine@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                className="text-white hover:text-purple-200 transition-colors"
              />
            </a>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default App;
