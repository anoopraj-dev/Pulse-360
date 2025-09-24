
interface ButtonProps {
    text : string;
    onClick? :()=>void;
};

const primaryButton = ({text,onClick}:ButtonProps) => {
    return (
        <button>{text}</button>
    )
}

export default primaryButton;