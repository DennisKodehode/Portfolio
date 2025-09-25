import iconMail from "../assets/Icon-Mail.svg";
import iconGitHub from "../assets/Icon-Github.svg";
import iconPhone from "../assets/Icon-Phone.svg";

export const Footer = () => {
  return (
    <section id="contact">
      <h1 className="footer-title">La oss ta en prat.</h1>
      <div className="footer-right">
        <div className="contact-item">
          <p className="p1-r">dennis4814@gmail.com</p>
          <div>
            <img src={iconMail} alt="Mail icon" />
          </div>
        </div>
        <div className="contact-item">
          <a href="https://github.com/DennisKodehode" target="_blank">
            <p className="p1-r">https://github.com/DennisKodehode</p>
          </a>
          <div>
            <img src={iconGitHub} alt="GitHub icon" />
          </div>
        </div>
        <div className="contact-item">
          <p className="p1-r">+4792175176</p>
          <div>
            <img src={iconPhone} alt="Phone icon" />
          </div>
        </div>
      </div>
    </section>
  );
};
