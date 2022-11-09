import Link from "next/link"


export default function Tutorial({tutorial}) {
    return (
        <div className='card'>
            <h2> {tutorial.frontmatter.title} </h2>
            <img src={tutorial.frontmatter.cover_image} alt='/' />
            <p> {tutorial.frontmatter.excerpt} </p>
            <Link legacyBehavior href={`/Tutorials/${tutorial.slug}`}> 
                <a className='btn-half'> Read more </a>
            </Link>
        </div>
    )
}

