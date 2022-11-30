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
    <Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
        integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
        crossOrigin="anonymous"
      />
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/shades-of-purple.min.css">
      </link>
    </Head>
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
