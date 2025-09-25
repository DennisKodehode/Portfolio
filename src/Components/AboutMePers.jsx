import personVideo from "../assets/personligVideo.mp4";
export const AboutMePers = () => {
  return (
    <>
      <div className="about-me-container">
        <div className="text-container">
          <p>
            Privat bruker jeg mesteparten av tiden på å utvikle meg innen
            frontend. Jeg har en kjæreste (og en katt som alltid vil være med),
            og når jeg kobler av blir det gjerne gaming eller en filmkveld
            sammen.
          </p>
        </div>
        <video
          src={personVideo}
          className="tab-video"
          autoPlay
          muted
          loop
        ></video>
      </div>
    </>
  );
};
