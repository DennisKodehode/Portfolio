import { TechStack } from "./TechStack";
import profVideo from "../assets/proffesjonelVideo.mp4";
export const AboutMeProf = () => {
  return (
    <>
      <div className="about-me-container">
        <div className="text-container">
          <p>
            Drevet, empatisk og nysgjerrig på verden. Jeg setter høye
            standarder, bryr meg om andres perspektiver og går i dybden på det
            jeg brenner for. Den kombinasjonen av ambisjon og empati preger både
            hvem jeg er og hvordan jeg jobber.
          </p>
          <TechStack />
        </div>
        <video
          src={profVideo}
          className="tab-video"
          autoPlay
          muted
          loop
        ></video>
      </div>
    </>
  );
};
