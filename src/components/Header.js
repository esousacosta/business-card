import aPicture from "../images/badger.jfif";

export default function Header() {
  return (
    <div className="header">
      <img className="header--img" src={aPicture} alt="Emanoel's face" />
    </div>
  );
}
