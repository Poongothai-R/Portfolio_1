import '../styles/tech.css';
import TechIcon from '../data/Tech_icon.json';
import TechItem from '../components/TechItem';

export default function Tech() {
    const techList = TechIcon.map((recs) => (
        <TechItem key={recs.id} techData={recs} />
    )
    );

    return (
        <div className="skills-page" id="tech">
            <div className="tech-title"><h1>Technical Skills</h1></div>
            <div className="tech-container">
                <div className='tech-left'><p>Here is the technologies that I already know and also started to learn.</p></div>
                <div className="tech-right">{techList}</div>
            </div>
        </div>

    );
};