import { useLocation } from "react-router-dom";
import gitHubLogo from "../assets/gitHub.svg";
import linkedInLogo from "../assets/linkedIn.svg";
import emailLogo from "../assets/email.svg";
import userLogo from "../assets/user.svg";

export default function Footer() {
  const portfolio = "https://girish-n7.github.io/portfolio/";
  const gitHub = "https://github.com/girish-n7";
  const linkedIn = "https://www.linkedin.com/in/girish-n-7075ba1a4";
  const email = "mailto: ngirish1729@gmail.com";

  const path = useLocation().pathname;
  let footerStyle = {
    backgroundColor: path === "/" ? "transparent" : "rgb(2, 5, 6)",
  };

  return (
    <footer style={footerStyle}>
      <p className="footer--content">
        © 2023. Made by Girish N{" "}
        <a href={portfolio} title="portfolio">
          <img src={userLogo} className="footer--logo" alt=""></img>
        </a>
        <a href={linkedIn} title="LinkedIn">
          <img src={linkedInLogo} className="footer--logo" alt=""></img>
        </a>
        <a href={gitHub} title="GitHub">
          <img src={gitHubLogo} className="footer--logo" alt=""></img>
        </a>
        <a href={email} title="email">
          <img src={emailLogo} className="footer--logo" alt=""></img>
        </a>
      </p>
    </footer>
  );
}
