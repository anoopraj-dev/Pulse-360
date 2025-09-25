
interface InputProps{
    placeholder?:string;
    className?:string;
    type?:string;
}

const Inputs = ({placeholder,className,type}:InputProps) => {
    return (
        <input placeholder={placeholder} type={type} className={`p-4 border border-opacity-20 border-[rgba(117,202,255,0.5)] rounded-md my-1 ${className}`}/>
    )
}

export default Inputs;