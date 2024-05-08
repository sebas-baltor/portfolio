import Paragraph from "@/components/const/Paragraph"
export default function TimelineItem({ title, description, date, imgSrc }: { title: string, imgSrc?: string, description: string, date: string }) {
    return (
        <li className="mb-20 ml-12 relative">
            <span className="absolute top-0 left-0 -translate-x-[4.4rem] w-[40px] h-[40px] rounded-lg bg-secondary text-primary font-bold flex items-center justify-center text-xs text-center">{date}</span>
            <div>
                <h3 className="font-bold text-3xl text-secondary leading-normal inline-block">
                    {title}
                </h3>
                <Paragraph className="md:w-2/3 lg:w-1/2" text={description} />
            </div>
            {imgSrc &&
                <div className="md:w-2/3 lg:w-1/2 mt-8 p-3 rounded-2xl bg-gradient-to-bl from-gray-blue-bot to-gray-blue-top shadow-lg relative">
                        <img src={imgSrc} alt={title} className="rounded-2xl" />
                    <div className="absolute top-0 left-0 w-full h-full bg-secondary/10 rounded-full blur-2xl z-[-1]"></div>
                </div>
            }

        </li>
    )
}