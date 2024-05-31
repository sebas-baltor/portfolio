import ParagraphContrast from "./ParagraphContrast"
export default function BoxVariant({className,title,paragraphs,imgSrc}:{className?:string,title:string,paragraphs:string[],imgSrc?:string}) {
    return (  
        <div className={`${className} rounded-2xl bg-gradient-to-b from-secondary via-secondary to-secondary-contrast shadow-lg p-8 overflow-hidden relative border border-gray-blue-top`}>
            <h5 className="font-black text-3xl text-primary mb-3">{title}</h5>
            {paragraphs.map((text,index)=><ParagraphContrast key={index} text={text}/>)}
            {imgSrc && <img src={imgSrc} alt="img" className="mt-3 rounded-2xl overflow-hidden"/>}
            <div className="absolute bg-secondary top-0 left-0 w-[100px] h-[100px] rounded-full z-[-1] -translate-y-1/2 blur-2xl"></div>
        </div>
    )
}