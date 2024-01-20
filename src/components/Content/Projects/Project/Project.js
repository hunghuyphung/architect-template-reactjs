function Project({project}) {
    return (
        <div className="margin-bottom-16 padding-0-8 display-container width-25 width-tablet width-100-mobile">
            <img src={project.image} alt="" className="width-100"/>
            <div className="padding-8-16 display-top bc-black" style={{marginLeft: '8px'}}>{project.name}</div>
        </div>
    );
}

export default Project;