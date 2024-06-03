export default function Paragraph(props: {text:string, className?:string}) {
  return <p className={`${props.className} bg-gradient-to-r from-text-dark to-text-light text-transparent bg-clip-text leading-normal font-bold`}>{props.text}</p>;
}