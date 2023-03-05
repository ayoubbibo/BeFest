import "../styles/SpecialButton.css";


function SpecialButton(props) {
    const handleClick = () => {
        props.onClick();
    };


    return (
        <button
            id="btn"
            onClick={() => handleClick()}
            style={props.style}
            disabled={props.disabled}
        >
            <span>
                {props.text}
            </span>
        </button>
    );
}

export default SpecialButton;