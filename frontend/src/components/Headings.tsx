interface HeadingsProps{
    text: string;
    className?: string;
}

const Headings = ({text}:HeadingsProps) => {
    return(
        <h1 className="font-primary text-[#2F3E46] text-4xl font-bold my-3 lg:my-10">{text}</h1>
    )
}

export default Headings;