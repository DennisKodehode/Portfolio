import { TabSwitch } from "./TabSwitch";

export const AboutMePers = () => {
  return (
    <>
      <h2 className="section-title">Om meg</h2>
      <div className="about-me-container">
        <div className="text-container">
          <TabSwitch />
          <p>
            Privat bruker jeg mesteparten av tiden på å utvikle meg innen
            frontend. Jeg har en kjæreste (og en katt som alltid vil være med),
            og når jeg kobler av blir det gjerne gaming eller en filmkveld
            sammen.
          </p>
        </div>
        <video
          src="src\assets\Personlig video.mp4"
          className="tab-video"
          autoPlay
          muted
          loop
        ></video>
      </div>
    </>
  );
};
