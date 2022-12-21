import aMailIcon from "../images/mail-icon.png";

export default function EmailButton() {
  return (
    <button className="base-button">
      <img className="button-icon" src={aMailIcon} alt="A small letter icon" />
      Email
    </button>
  );
}
