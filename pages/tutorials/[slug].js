import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import styled from 'styled-components'
import DynNavbar from '../../components/DynNavbar'
import Footer from '../../components/Footer'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeHighlight from 'rehype-highlight'
import Head from 'next/head'
import 'katex/dist/katex.min.css'
import 'highlight.js/styles/shades-of-purple.css'



const Hero = styled.div`
  display: flex;
  justify-content: left;
  background: #fff;
  align-items: left;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 20px;
  padding-bottom: 20px;
`




export default function PostPage({
  mdxSource,
}) {


  return (
    <>
      <DynNavbar/>
      <Hero>
          <div className='post-body'>
            <MDXRemote {...mdxSource}/>
          </div>
      </Hero>
      <Footer/>
    </>
  )
}


export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('tutorials'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}


export async function getStaticProps({ params: { slug } }) {

  const markdownWithMeta = fs.readFileSync(
    path.join('tutorials', slug + '.mdx'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex, rehypeHighlight],
      format: 'mdx'
    }
  })

  return {
    props: {
      frontmatter,
      slug,
      mdxSource,
    },
  }
}
