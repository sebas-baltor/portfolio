export default function MainTitle(props: { grayText: string, highlightText: string }) {
    return (
        <h1 className={`font-bold text-6xl bg-gradient-to-r from-text-dark to-text-light text-transparent bg-clip-text leading-normal`}>
            {props.grayText}
            <b className="text-secondary"> {props.highlightText}</b>
        </h1>
    )
}