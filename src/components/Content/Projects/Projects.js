import Project from "./Project/Project";
import houseImg2 from '../../../assets/house2.jpg';
import houseImg3 from '../../../assets/house3.jpg';
import houseImg4 from '../../../assets/house4.jpg';
import houseImg5 from '../../../assets/house5.jpg';

const projects = [
    {
        name: 'Brick House',
        image: houseImg2
    },
    {
        name: 'Renovated',
        image: houseImg3
    },
    {
        name: 'Barn House',
        image: houseImg4
    },
    {
        name: 'Summer house',
        image: houseImg5
    }
];


function Projects() {
    return (
        <div>
            <div className="padding-32-16">
                <h3 className="padding-16-0 h-border-bottom h-border-light-grey h-font">Projects</h3>
            </div>
            <div className="display-flex padding-0-8 flex-wrap">
                <Project project={projects[3]}></Project>
                <Project project={projects[0]}></Project>
                <Project project={projects[1]}></Project>
                <Project project={projects[2]}></Project>
            </div>
            <div className="display-flex padding-0-8 flex-wrap">
                <Project project={projects[3]}></Project>
                <Project project={projects[0]}></Project>
                <Project project={projects[1]}></Project>
                <Project project={projects[2]}></Project>
            </div>
        </div>
    );
}

export default Projects;