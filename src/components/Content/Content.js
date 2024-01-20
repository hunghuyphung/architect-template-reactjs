import Projects from "./Projects/Projects";
import About from "./About/About";
import Contact from "./Contact/Contact";
import mapImg from '../../assets/map.jpg';

function Content() {
    return (
        <div className="padding-8-16">
            <Projects></Projects>
            <About></About>
            <Contact></Contact>
            <div className="padding-0-16">
                <img src={mapImg} alt="" width="100%" className="margin-auto"/>
            </div>
        </div>
    );
}

export default Content;