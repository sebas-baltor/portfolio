export default function AnchorBtn(props:{href:string,children?:React.ReactNode,text:string}) {
    return (
        <a target={"_blank"} href={props.href} className="flex items-center flex-nowrap gap-2 px-3 py-1 rounded-md bg-secondary/80 hover:bg-secondary transition border-2 border-secondary text-primary font-bold">
            {props.children}
            {props.text}
        </a>
    )
}