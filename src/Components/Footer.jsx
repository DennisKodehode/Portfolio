export const Footer = () => {
  return (
    <section id="contact">
      <h1 className="footer-title">La oss ta en prat.</h1>
      <div className="footer-right">
        <div className="contact-item">
          <p className="p1-r">eksempel@gmail.com</p>
          <div>
            <img src="src\assets\Icon-Mail.svg" alt="Mail icon" />
          </div>
        </div>
        <div className="contact-item">
          <p className="p1-r">https://github.com/DennisKodehode</p>
          <div>
            <img src="src\assets\Icon-Github.svg" alt="GitHub icon" />
          </div>
        </div>
        <div className="contact-item">
          <p className="p1-r">+47xxxxxxxx</p>
          <div>
            <img src="src\assets\Icon-Phone.svg" alt="Phone icon" />
          </div>
        </div>
      </div>
    </section>
  );
};
