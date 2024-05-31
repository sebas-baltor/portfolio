export default function ParagraphContrast(props: {text:string, className?:string}) {
    return <p className={`${props.className} bg-gradient-to-r from-primary to-primary text-transparent bg-clip-text leading-normal`}>{props.text}</p>;
  }