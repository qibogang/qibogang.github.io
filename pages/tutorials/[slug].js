import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import styled from 'styled-components'
import DynNavbar from '../../components/DynNavbar'
import Footer from '../../components/Footer'


const Hero = styled.div`
  display: flex;
  justify-content: center;
  background: #fff;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 20px;
  padding-bottom: 20px;
`

export default function PostPage({
  frontmatter: { title, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <DynNavbar/>
      <Hero>
        <div className='container'>
          <div className='post-body'>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
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
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('tutorials', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
