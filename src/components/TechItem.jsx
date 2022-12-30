import '../styles/tech.css';

export default function TechItem({techData}) {
    const{title,image} = techData;
    const techImgURL = require(`../assests/skills/${image}`);
    return(
        <div className="tech-card">
            <img src={techImgURL} alt="skill-logo"/>
            <h6>{title}</h6>
        </div>
    );
};