import EmailButton from "./EmailButton";
import LinkedinButton from "./LinkedinButton";
import Article from "./Article";

export default function Main() {
  return (
    <main className="main-content">
      <div className="main--author_name">Emanoel De Sousa Costa</div>
      <div className="main--author_role">Fullstack Developer</div>
      <div className="main--author_website">emanoel.website</div>
      <div className="main--button_area">
        <EmailButton />
        <LinkedinButton />
      </div>
      <Article />
    </main>
  );
}
