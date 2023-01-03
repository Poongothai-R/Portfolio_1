import Github from "../assests/contacts/github.png";
import Linkedin from "../assests/contacts/linkedin.png";
import "../styles/contact.css";

// add space between the input and the component
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-icon">
        <a
          href="https://github.com/Poongothai-R/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Github} alt="github-logo" />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/poongothai-rajesh-38320087/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Linkedin} alt="linkedin-logo" />{" "}
        </a>
      </div>
      <div className="copyright">
        <span>© Poongothai Rajesh 2022</span>
      </div>
    </div>
  );
}
