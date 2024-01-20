
function Member({member}) {
    return (
        <div className="margin-bottom-16 padding-0-8 width-25 width-tablet width-100-mobile">
            <img src={member.image} alt="" className="width-100 filter-gray"/>
            <h3 className="h-font">{member.name}</h3>
            <p className="margin-15-0 opac-60">{member.role}</p>
            <p className="margin-15-0">
                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
            </p>
            <button className="h-button bc-light-grey width-100 hover-gray">Contact</button>
        </div>
    );
}

export default Member;