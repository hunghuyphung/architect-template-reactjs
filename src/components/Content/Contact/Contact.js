

function Contact() {
    return (
        <div className="padding-32-16">
            <h3 className="padding-16-0 h-border-bottom h-border-light-grey h-font">Contact</h3>
            <p className="margin-15-0">Lets get in touch and talk about your next project.</p>
            <input type="text" placeholder="Name" className="h-input"/>
            <input type="text" placeholder="Email" className="h-input margin-15-0"/>
            <input type="text" placeholder="Subject" className="h-input margin-15-0"/>
            <input type="text" placeholder="Comment" className="h-input margin-15-0"/>
            <button className="h-button margin-15-0 bc-black">SEND MESSAGE</button>
        </div>
    );
}

export default Contact;