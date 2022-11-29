import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import styled from 'styled-components'
import DynNavbar from '../../components/DynNavbar'
import Footer from '../../components/Footer'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Latex from 'react-latex'
import { MathJax } from 'better-react-mathjax'
import Head from 'next/head'
import katex from 'katex'
import autorender from "../../components/katex-autorender"
//import '../../styles/katex.min.css'




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


const md = require('markdown-it')({
    html: true
  })
  .use(require('markdown-it-highlightjs'))
  .use(require('markdown-it-katex'))

const components = {SyntaxHighlighter, Latex, MathJax}


export default function PostPage({
  frontmatter: { title, cover_image },
  slug,
  mdxSource,
}) {


  // mdxSource = autorender.renderMathInElement(mdxSource.compiledSource, {
  //         // customised options
  //         // • auto-render specific keys, e.g.:
  //         delimiters: [
  //             {left: '$$', right: '$$', display: true},
  //             {left: '$', right: '$', display: false},
  //             {left: '\\(', right: '\\)', display: false},
  //             {left: '\\[', right: '\\]', display: true}
  //         ],
  //         // • rendering keys, e.g.:
  //         throwOnError : false
  //       })
  // console.log(mdxSource)

  return (
    <>
      <DynNavbar/>
      <Hero>
          <div className='post-body'>
            <MDXRemote {...mdxSource} components={components} />
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
  const mdxSource = await serialize(content)

  return {
    props: {
      frontmatter,
      slug,
      mdxSource,
    },
  }
}
