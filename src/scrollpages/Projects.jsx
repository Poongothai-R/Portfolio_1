import "../styles/projects.css";
import ProjectData from "../data/Project_data.json";
import ProjectCard from "../components/ProjectCard";
import ModalCard from "../components/ModalCard";

export default function Projects({ setShowModal }) {
  const ProjectItem = ProjectData.map((recs) => (
    <ProjectCard
      key={recs.id}
      cardData={recs}
      popup={() => setShowModal(<ModalCard modalData={recs} />)}
    />
  ));

  return (
    <div className="project-page" id="projects">
      <h1> Projects</h1>
      <div className="project-container">
        <div className="project-left">
          <p>
            Here are the projects I will be working on during the Frontend
            course at Novare Potential.
          </p>
        </div>
        <div className="project-right">{ProjectItem}</div>
      </div>
    </div>
  );
}
