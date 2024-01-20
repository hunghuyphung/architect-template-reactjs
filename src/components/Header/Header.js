import './Header.css';

function Header() {
    return (
        <div id="header" className="padding-8-16 shadow-gray display-flex flex-space-between bc-white">
            <button className="h-button text-underline-none letter-spacing-4 bc-white hover-gray">
                <b>BR </b>
                Architects
            </button>
            <div className="hide-small">
                <button className="h-button text-underline-none letter-spacing-4 bc-white hover-gray">
                    Projects
                </button>
                <button className="h-button text-underline-none letter-spacing-4 bc-white hover-gray">
                    About
                </button>
                <button className="h-button text-underline-none letter-spacing-4 bc-white hover-gray">
                    Contact
                </button>
            </div>
        </div>
    );
}

export default Header;
