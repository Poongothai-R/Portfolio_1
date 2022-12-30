import '../styles/projects.css';

export default function ProjectCard ({cardData,popup}) {
    const {bgc,id,title,image,isCompleted} = cardData;
    const imgurl = require(`../assests/projects/${image}`);
    return (
        <div className='project-card' onClick={isCompleted ? ()=>popup(id) : null}>
            {isCompleted === false && (
            <div className="blurCard-text">
              <h4>Coming Soon</h4>
            </div>
          )}
            <img className={isCompleted ? "activeCard" : "blurCard"} src={imgurl} alt={image}></img>
            <span className={isCompleted ? "activeCard" : "blurCard"} id={bgc}>{title}</span>
        </div>
    );
};