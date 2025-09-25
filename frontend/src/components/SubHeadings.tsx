
interface SubheadingProps{
    text: string;
    className?: string;
}

const SubHeadings = ({text,className}:SubheadingProps) => {
    return (
        <h3 className={` text-2xl font-semibold ${className}`}>{text}</h3>
    )
}

export default SubHeadings;