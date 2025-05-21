import Paragraph from "./Paragraph"
import Link from "next/link"
import { Post } from "contentlayer/generated";
import {format, parseISO} from "date-fns";
export default function PreviewPost({ href, className, post }: { href: string, className?: string, post:Post }) {
    return (
        <Link href={href} className={`${className} rounded-2xl bg-gradient-to-bl from-gray-blue-bot/5 to-gray-blue-top shadow-lg p-8 overflow-hidden relative border border-gray-blue-top group`}>
            <div className="h-full flex flex-col gap-3 justify-between">
                <h5 className="font-black text-3xl text-secondary">{post.title}</h5>
                <Paragraph text={post.summary ? post.summary : " "} />
                <div className="w-full flex justify-between">
                    <small className="text-title-text-light">{format(parseISO(post.date), 'LLLL d, yyyy')}</small>
                    <small className="text-secondary">{post.readingTime.text}</small>
                </div>
                <div className="absolute bg-secondary top-0 left-0 transition group-hover:translate-x-1/2 w-[100px] h-[100px] rounded-full z-[-1] -translate-y-1/2 blur-2xl"></div>
            </div>
        </Link>
    )
}