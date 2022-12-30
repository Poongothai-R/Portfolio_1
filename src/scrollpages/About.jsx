import '../styles/about.css';
import AboutImg from '../assests/hero/aboutimg.png';

export default function About() {
    return (
        <div className='about-page' id='about'>
            <h1> About Me </h1>
            <div className='about-container'>
                <div className='about-left'>
                    <p>My name is Poongothai Rajesh.
                        I am a passionate Front-end Developer based in Stockholm, Sweden.</p>&nbsp;
                    <p>I have a passion for developing user-friendly, accessible and responsive websites
                        with JavaScript / ReactJS / HTML / CSS. I never stop learning and want to challenge myself
                        in every new project.</p>&nbsp;
                    <p>Scroll down to see some of my work!</p>&nbsp;
                </div>
                <div className='about-right'>
                    <img src={AboutImg} alt="Poongothai-R"></img>
                </div>
            </div>
        </div>
    );
}