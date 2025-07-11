// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    summary: { type: 'string', required: false },
    tags: { type: 'list', of: { type: 'string' }, required: false },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/post/${post._raw.flattenedPath}` },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, ""),
    },
    readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  },
}))

export default makeSource({
  contentDirPath: 'src/posts', documentTypes: [Post]
  , mdx: {
    // remarkPlugins: [remarkGfm as any],
    rehypePlugins: [
      rehypeSlug,
      rehypePrism as any,
      remarkGfm,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor']
          }
        }
      ]
    ],
    esbuildOptions(options) {
      // 1) Indica que se genere para Node (built-ins no se empacarán)
      options.platform = 'node'
      // 2) (Opcional) explícitamente marca los módulos core como externos
      options.external = [
        'util',
        'crypto',
        'async_hooks',
        'stream',
      ]
      return options
    },
  }
})