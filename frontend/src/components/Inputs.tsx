
interface InputProps{
    placeholder?:string;
    className?:string;
    type?:string;
    value?: string;
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

const Inputs = ({placeholder,className,type,value,onChange}:InputProps) => {
    return (
        <input placeholder={placeholder} value={value} onChange={onChange} type={type} className={`p-4 border border-opacity-20 border-[rgba(117,202,255,0.5)] rounded-md my-1 ${className}`}/>
    )
}

export default Inputs;