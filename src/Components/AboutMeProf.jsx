import { TechStack } from "./TechStack";

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
          src="src\assets\Proffesjonel video.mp4"
          className="tab-video"
          autoPlay
          muted
          loop
        ></video>
      </div>
    </>
  );
};
