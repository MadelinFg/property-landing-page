import "./Button.css";

const Button = ({
    classN,
    text,
    type = "button",
    onClick,
    disabled,
    customStyle = "" //Options: orange, white, border, text-only
}) => {
    return (
        <div className="btn-container">
            <button
                className={`button ${classN, customStyle}`}
                type={type}
                onClick={onClick}
                disabled={disabled}
                title={text}
            >
                {text}
            </button>
        </div>
    );
};

export default Button;
