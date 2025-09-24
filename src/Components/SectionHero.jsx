export const SectionHero = () => {
  return (
    <section className="section-hero">
      <div className="hero-text-button-container">
        <div className="hero-text-container">
          <h1 className="hero-title">Hei, jeg er Dennis</h1>
          <p className="p1-r">
            Jeg bygger clean og brukervennlige grensesnitt mens jeg lærer
            håndverket steg for steg.
          </p>
        </div>
        <div className="hero-button-wrapper">
          <a href="#projects" className="hero-primary-button">
            Prosjekter
          </a>
          <a href="#contact" className="hero-secondary-button">
            Kontakt meg
          </a>
        </div>
      </div>
      <video
        src=".\src\assets\Hero video.mp4"
        className="hero-video"
        autoPlay
        muted
        loop
      ></video>
    </section>
  );
};
