export const Footer = () => {
  return (
    <section id="contact">
      <h2 className="footer-title">La oss ta en prat.</h2>
      <div className="footer-right">
        <div className="contact-item">
          <p className="p1-r">eksempel@gmail.com</p>
          <div className="icon-wrapper">
            <img src="src\assets\Icon-Mail.svg" alt="Mail icon" />
          </div>
        </div>
        <div className="contact-item">
          <p className="p1-r">https://github.com/DennisKodehode</p>
          <div className="icon-wrapper">
            <img src="src\assets\Icon-Github.svg" alt="GitHub icon" />
          </div>
        </div>
        <div className="contact-item">
          <p className="p1-r">+47xxxxxxxx</p>
          <div className="icon-wrapper">
            <img src="src\assets\Icon-Phone.svg" alt="Phone icon" />
          </div>
        </div>
      </div>
    </section>
  );
};
