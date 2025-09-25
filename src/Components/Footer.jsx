// src/Components/Footer.jsx
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import iconMail from "../assets/Icon-Mail.svg";
import iconGitHub from "../assets/Icon-Github.svg";
import iconPhone from "../assets/Icon-Phone.svg";

export const Footer = () => {
  useGSAP(() => {
    gsap.from(".contact-item", {
      y: 12,
      opacity: 0,
      duration: 2,
      stagger: 0.08,
      scrollTrigger: { trigger: "#contact", start: "top 5%" },
    });
  }, []);

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
          <p className="p1-r">DennisKodehode</p>
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
