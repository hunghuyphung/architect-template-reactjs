import Member from "./Member/Member";
import team1 from '../../../assets/team1.jpg';
import team2 from '../../../assets/team2.jpg';
import team3 from '../../../assets/team3.jpg';
import team4 from '../../../assets/team4.jpg';

const members = [
    {
        name: 'John Doe',
        role: 'CEO & Founder',
        image: team2
    },
    {
        name: 'Jane Doe',
        role: 'Architect',
        image: team1
    },
    {
        name: 'Mike Ross',
        role: 'Architect',
        image: team3
    },
    {
        name: 'Dan Star',
        role: 'Architect',
        image: team4
    }
];

function About() {
    return (
        <div>
            <div className="padding-32-16">
                <h3 className="padding-16-0 h-border-bottom h-border-light-grey h-font">About</h3>
                <p className="margin-15-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className="padding-0-8 display-flex flex-wrap">
                {members.map(member => <Member member={member}></Member>)}
            </div>
        </div>
    );
}

export default About;