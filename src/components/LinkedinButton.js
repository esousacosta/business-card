import aLinkedinIcon from "../images/linkedin-icon.png";

export default function LinkedinButton() {
  return (
    <a
      href="https://www.linkedin.com/in/esousacosta/"
      target="_blank"
      rel="noreferrer"
    >
      <button className="base-button linkedin-button">
        <img className="button-icon" src={aLinkedinIcon} alt="A small L icon" />
        Linkedin
      </button>
    </a>
  );
}
