
interface InputProps{
    placeholder?:string;
    className?:string;
    type?:string;
}

const Inputs = ({placeholder,className,type}:InputProps) => {
    return (
        <input placeholder={placeholder} type={type} className={`p-4 border border-[#75CAFF] rounded-md my-1 ${className}`}/>
    )
}

export default Inputs;