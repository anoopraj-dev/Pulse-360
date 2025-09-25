
interface TextProps{
    text: string;
    className?: string;
}


const Subtext = ({text,className}:TextProps) =>{
    return (
        <p  className={`text-[#6C757D] text-xl ${className || ''}`}>{text}</p>
    )
}

export default Subtext;