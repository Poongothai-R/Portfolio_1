import "../styles/tech.css";

export default function TechItem({ techData, popup }) {
  const { id, title, image } = techData;
  const techImgURL = require(`../assests/skills/${image}`);

  // space
  return (
    <div className="tech-card" onClick={() => popup(id)}>
      <img src={techImgURL} alt="skill-logo" />
      <h6>{title}</h6>
    </div>
  );
}
