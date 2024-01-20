import architectImg from '../../assets/architect.jpg';

function Slider() {
    return (
        <div className="display-container">
            <img className="h-image margin-auto" src={architectImg} alt="" width="1500px" height="800px"/>
            <h1 className="margin-top-16 display-middle letter-spacing-4">
                <span className="padding-8-16 bc-black opac-75 font-36">BR</span>
                <span className="margin-left-16 color-white font-36 h-font hide-small">Architects</span>
            </h1>
        </div>
    );
}

export default Slider;

