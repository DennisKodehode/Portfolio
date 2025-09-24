import iconMail from "../assets/Icon-Mail.svg";
import iconGitHub from "../assets/Icon-Github.svg";
import iconPhone from "../assets/Icon-Phone.svg";

export const Footer = () => {
  return (
    <section id="contact">
      <h1 className="footer-title">La oss ta en prat.</h1>
      <div className="footer-right">
        <div className="contact-item">
          <p className="p1-r">eksempel@gmail.com</p>
          <div>
            <img src={iconMail} alt="Mail icon" />
          </div>
        </div>
        <div className="contact-item">
          <p className="p1-r">https://github.com/DennisKodehode</p>
          <div>
            <img src={iconGitHub} alt="GitHub icon" />
          </div>
        </div>
        <div className="contact-item">
          <p className="p1-r">+47xxxxxxxx</p>
          <div>
            <img src={iconPhone} alt="Phone icon" />
          </div>
        </div>
      </div>
    </section>
  );
};
