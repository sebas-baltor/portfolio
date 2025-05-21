// "use client"
import { use } from "react";
import styles from "@/style"
import Footer from "@/components/Footer"
import {Post, allPosts} from "contentlayer/generated"
// import { Post, allPosts } from "contentlayer/generated"
import Link from "next/link"
import Image from "next/image"
import { format, parseISO } from "date-fns"
import {useMDXComponent} from "next-contentlayer2/hooks";

const mdxComponent = {
    Image
}
export default function PostPage(props: { params: Promise<{slug: string}> }) {
    const params = use(props.params);
    const post = allPosts.find((post) => post.slug === params.slug) as Post;
    const Content = useMDXComponent(post.body.code)

    return (
        <>
        <article className={`overflow-hidden min-h-screen w-full min-w-sm relative bg-squares-patterns`}>
            <div
                className={`flex ${styles.paddings} min-h-screen`}
            >
                <div
                className={`${styles.innerWidth} mx-auto flex flex-col gap-20 z-10`}
                >
                    <div>
                        <div className="mb-3">
                        <Link href="/blog" className="text-xs text-title-text-light hover:text-secondary transition">👈 Go Back</Link>
                        </div>
                        <h1 className={`font-black text-3xl md:text-4xl lg:text-6xl bg-gradient-to-r from-text-dark to-text-light text-transparent bg-clip-text leading-normal inline-block text-pretty pb-3`}>{post?.title}</h1>
                        <div className="w-full flex justify-between items-center mt-3 gap-3">
                            <div className="flex gap-1 text-title-text-light items-end">
                                <Image src={"/me.png"} alt={"me"} width={20} height={20}  className="rounded-full"/>
                                <small>Sebastián Baltazar - {post?.date && format(parseISO(post.date), 'LLLL d, yyyy')}</small>
                            </div>
                            <small className="text-secondary">{post?.readingTime.text}</small>
                        </div>
                    </div>
                    <div className="post text-title-text-light max-w-2xl mx-auto leading-loose">
                        <Content components={mdxComponent}/>
                    </div>
                    {/* {post?.body ? <div className="text-white [&>*]:mb-3 [&>*:last-child]:mb-0 lg:w-1/2 lg:mx-auto"> </div>: <p>Post not found</p>} */}
                </div>
            </div>
        </article>
        <Footer/>
        </>
    );
}