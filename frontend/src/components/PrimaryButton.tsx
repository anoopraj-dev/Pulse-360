
interface ButtonProps {
    text : string;
    onClick? : ()=>void;
    className?: string;
};

const PrimaryButton = ({text,onClick,className}:ButtonProps) => {
    return (
        <button className={`mt-5 bg-[#0096C7] text-white text-xl p-4  font-semibold rounded-md ${className}` } onClick={onClick} >{text}</button>
    )
}

export default PrimaryButton;