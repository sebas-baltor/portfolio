import { allPosts, Post } from "contentlayer/generated";
import PreviewPost from '@/components/const/PreviewPost';
import styles from "@/style";
import MainTitle from "@/components/const/MainTitle";
import Paragraph from "@/components/const/Paragraph";
import Link from "next/link";

export default function Posts() {
  const posts = allPosts;
  return (
    <main className={`overflow-x-hidden h-screen w-full relative bg-squares-patterns`}>
      <div
        className={`flex ${styles.paddings} min-h-screen`}
      >
        <div
          className={`${styles.innerWidth} mx-auto flex flex-col gap-20 z-10`}
        >
          <div>
            <Link href="/" className="text-xs text-title-text-light hover:text-secondary transition">👈 Go Back Home</Link>
            <MainTitle grayText="Mi" highlightText="Blog"/>
            <Paragraph text="Here you will find the most recent posts I have written, I hope you like them but especially that they are useful." />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center'>
            {posts.length > 0 ? (posts.map((post, idx) => (
              <PreviewPost
                href={`blog/${post.url}`}
                key={idx}
                post={post}
              />
            ))):(<div className="text-title-text-light font-bold text-3xl md:col-span-2 lg:col-span-3 text-center">🫠 Ooops! No posts Yet</div>)}
          </div>
        </div>
      </div>

      <div className="z-1 bg-glows absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"></div>
      <div className="z-1 bg-glows absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[1200px] h-[1200px] rounded-full"></div>
    
    </main>
  );
}