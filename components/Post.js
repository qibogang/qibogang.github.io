import Link from "next/link"


export default function Post({post}) {
    return (
        <div class='card'>
            <h2> {post.frontmatter.title} </h2>
            <img src={post.frontmatter.cover_image} alt='/' />
            <p> {post.frontmatter.excerpt} </p>
            <Link legacyBehavior href={`/Tutorials/${post.slug}`}> 
                <a className='btn'> Read more </a>
            </Link>
        </div>
    )
}

