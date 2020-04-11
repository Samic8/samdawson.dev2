import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ArticleHeader from "../components/ArticleHeader"
import "prism-themes/themes/prism-atom-dark.css"
import "./Article.css"
import SEO from "../components/SEO"
import Content from "../components/Content"
import WiggleDownLine from "../svgs/wiggle-down-line.svg"
import ThumbsUpSvg from "../svgs/thumbs-up.svg"
import ThumbsDownSvg from "../svgs/thumbs-down.svg"
import { getActiveClasses } from "get-active-classes"
import axios from "axios"

export default function post({ data }) {
  const [feedbackClickedFor, setFeedbackClickedFor] = useState(null)

  function submitFeedback(type) {
    axios.get("/.netlify/functions/quick-feedback/quick-feedback", {
      type,
      page: data.markdownRemark.frontmatter.title,
    })
    setFeedbackClickedFor(type)
  }

  return (
    <Layout useColoredBackground>
      <SEO
        title={data.markdownRemark.frontmatter.title}
        imageUrl={
          data.markdownRemark.frontmatter.featuredImage &&
          data.markdownRemark.frontmatter.featuredImage.publicURL
        }
        description={data.markdownRemark.excerpt}
      />
      <ArticleHeader
        title={data.markdownRemark.frontmatter.title}
        date={data.markdownRemark.frontmatter.date}
        dateTime={data.markdownRemark.frontmatter.dateTime}
      ></ArticleHeader>
      <Content>
        <article
          className={"article text-sm sm:text-base text-black"}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </Content>
      <WiggleDownLine className="mx-auto sm:mt-10 h-24 sm:h-auto" aria-hidden />
      <form
        name="feedback"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="my-4 sm:my-10 font-systemFont"
      >
        <input type="hidden" name="form-name" value="feedback" />
        <input
          type="hidden"
          name="article"
          value={data.markdownRemark.frontmatter.title}
        />
        <div className="flex justify-center items-center mb-3 text-gray-800">
          <h2 className="text-md sm:text-lg leading-tight text-center mr-2">
            Was this article helpful?
          </h2>
          <FeedbackButton
            type="up"
            activeFor={feedbackClickedFor}
            onClick={submitFeedback}
          />
          <FeedbackButton
            type="down"
            activeFor={feedbackClickedFor}
            onClick={submitFeedback}
          />
        </div>
        <div className="max-w-md flex flex-col mx-auto mx-auto border border-gray-100 rounded focus-within:border-gray-500 bg-white">
          <textarea
            className="flex-grow flex-shrink min-w-0 p-4 text-gray-800 outline-none rounded"
            name={`feedback-text`}
            placeholder="Make it better by having your say!"
          />
          <button
            type="submit"
            className="bg-gray-500 hover:bg-gray-400 text-white font-bold text-md m-1 rounded px-4"
          >
            Submit
          </button>
        </div>
      </form>
      <WiggleDownLine className="mx-auto h-24 sm:h-auto" aria-hidden />
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        featuredImage {
          publicURL
        }
        date(formatString: "MMM D, YYYY")
        dateTime: date(formatString: "YYYY-MM-DD")
      }
      excerpt
    }
  }
`

function FeedbackButton({ type, activeFor, className, onClick }) {
  const typeColors = {
    up: "hover:text-green-900 hover:bg-green-200",
    down: "hover:text-red-900 hover:bg-red-200",
  }

  const activeForClasses = {
    up: "text-green-900 bg-green-200",
    down: "text-red-900 bg-red-200",
  }

  const typeTexts = {
    up: "I found this article helpful",
    down: "I didn't find this article helpful",
  }

  const typeSvgs = {
    up: ThumbsUpSvg,
    down: ThumbsDownSvg,
  }

  const TypeSvg = typeSvgs[type]

  return (
    <button
      disabled={!!activeFor}
      onClick={e => {
        e.preventDefault()
        onClick(type)
      }}
      className={getActiveClasses(
        "rounded-full",
        !activeFor ? typeColors[type] : "",
        type === activeFor ? activeForClasses[activeFor] : "",
        className
      )}
      aria-label={typeTexts[type]}
    >
      <TypeSvg className="fill-currentColor m-3" />
    </button>
  )
}
