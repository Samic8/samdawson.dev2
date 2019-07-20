import React from 'react'
import TechList from './techList'
import { Link } from 'gatsby'

export default function PostList({posts = []}) {
    return (
        <ul>
            {posts.map((post, index) => (
                <div key={post.id} className={index > 0 ? 'mt-5' : ''}>
                    <PostRow post={post} />
                </div>
            ))}
        </ul>
    )
}

const techsToArray = techs => techs ? techs.split(' ') : []
const PostRow = ({post}) => (
    <li className='border-b-2 border-gray-100 border-dashed pb-3 sm:pb-6'>
        <article className='flex-col flex sm:flex-row'>
            <div className='mr-8'>
                <Link to={post.frontmatter.slug}>
                    <h1 className='text-base leading-none text-gray-900 mb-2 font-semibold hover:text-teal-500'>{post.frontmatter.title}</h1>
                </Link>
                <p className='text-xsm text-gray-700 leading-tight'>{post.excerpt}</p>
            </div>
            <div className='mt-3 sm:mt-0 w-24 flex-shrink-0 flex items-end rtl'>
                {techsToArray(post.frontmatter.techs).map(tech => <span className={'capitalize mr-2 font-bold text-gray-500'}>{tech}</span>)}
            </div>
        </article>
    </li>
)
