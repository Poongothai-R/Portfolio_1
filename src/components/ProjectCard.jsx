import "../styles/projects.css";

export default function ProjectCard({ cardData, popup }) {
  const { bgc, id, title, image, isCompleted } = cardData;

  // Properties
  const imgurl = require(`../assests/projects/${image}`);

  // Components (separate the comming soon, to make it easier to read)
  const CommingSoon = (
    <div className="blurCard-text">
      <h4>Coming Soon</h4>
    </div>
  );

  return (
    <div
      className="project-card"
      onClick={isCompleted ? () => popup(id) : null}
    >
      {isCompleted === false && { CommingSoon }}
      <img
        className={isCompleted ? "activeCard" : "blurCard"}
        src={imgurl}
        alt={image}
      ></img>
      <span className={isCompleted ? "activeCard" : "blurCard"} id={bgc}>
        {title}
      </span>
    </div>
  );
}
