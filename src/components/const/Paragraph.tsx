export default function Paragraph(props: {text:string}) {
  return <p className="bg-gradient-to-r from-text-dark to-text-light text-transparent bg-clip-text leading-normal">{props.text}</p>;
}