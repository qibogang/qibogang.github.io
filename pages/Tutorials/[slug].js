import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import styled from 'styled-components'
import DynNavbar from '../../components/DynNavbar'


const Hero = styled.div`
  height: 88vh;
  display: flex;
  justify-content: center;
  background: #fff;
  align-items: center;
`

export default function PostPage({
  frontmatter: { title, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <DynNavbar/>
      <Link legacyBehavior href='/Tutorials'>
        <a className='btn-back'>Go Back</a>
      </Link>
      <Hero>
        <div className='card card-page'>
          <img src={cover_image} alt='' />
          <div className='post-body'>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
        </div>
      </Hero>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

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
    path.join('posts', slug + '.md'),
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
