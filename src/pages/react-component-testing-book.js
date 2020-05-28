import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import Layout from "../components/Layout"
import TechList from "../components/TechList"
import WiggleDownLine from "../svgs/wiggle-down-line.svg"
import { graphql } from "gatsby"
import Book from "../components/Book"

export default function Subscribe({ data }) {
  const [email, setEmail] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()
    if (!email) return
    const result = await addToMailchimp(email, {
      PATHNAME: window.location.href.replace("https://www.samdawson.dev", ""),
    })
    setSuccess(result.result === "success")
  }

  return (
    <Layout>
      <article className="pt-12 pb-20 mt-10" id="footer">
        <h2 className="text-gray-800 text-md sm:text-lg max-w-lg leading-tight mx-auto text-center">
          Get FREE chapters from{" "}
          <div>
            <b>React Component Testing</b>
          </div>{" "}
          as it's being written
        </h2>
        <div className="px-6">
          {success === null && (
            <>
              <form
                onSubmit={handleSubmit}
                className="h-16 max-w-sm flex mx-auto mt-8 border border-gray-100 rounded focus-within:border-gray-500 bg-white"
              >
                <input
                  className="flex-grow flex-shrink min-w-0 pl-4 text-gray-800 outline-none rounded"
                  placeholder="frontend@person.com"
                  type="email"
                  onChange={e => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-purple-500 hover:bg-purple-400 text-white font-bold text-md m-1 rounded px-4"
                >
                  Subscribe
                </button>
              </form>
              {/* Turning off past newsletters for now to if it influences subscribers */}
              {/* <div className="max-w-sm mx-auto text-xsm mt-8 text-center underline hover:text-purple-700">
                <a
                  href="https://us3.campaign-archive.com/home/?u=3fde574ccfe379668e02db78b&id=9b6d8a39fc"
                  target="_blank"
                >
                  read past newsletters
                </a>
              </div> */}
            </>
          )}
          <div className="max-w-lg flex sm:flex-row flex-col items-center sm:items-start mt-8 sm:mt-16 mx-auto">
            <p className="text-md sm:mb-0 mb-8">
              Learn a toolkit of techniques and mental models to create testing
              strategies for every UI component variation you come across.
            </p>
            <Book className="ml-0 sm:ml-4" />
          </div>
          <div className="max-w-lg mx-auto mt-8 sm:mt-16">
            <h2 className="text-md mb-4">
              <span>
                A go to reference book for testing React components with{" "}
              </span>
              <a className="link" href="https://jestjs.io/">
                Jest
              </a>{" "}
              and{" "}
              <a
                className="link"
                href="https://testing-library.com/docs/react-testing-library/intro"
              >
                React Testing Library
              </a>
              .
            </h2>
            <ul className="list-disc mx-auto text-sm">
              <li>
                Integration tests where one change doesn't break all of your
                tests
              </li>
              <li>Unit tests that don't accidentally test dependencies</li>
              <li>When to use mocks and spy's to test your components</li>
              <li>
                How to test behaviour instead of implementation, to make code
                changes not always break your tests
              </li>
              <li>When you need to test implementation</li>
              <li>
                Strategies for testing code that generates SVGs for graphs
              </li>
              <li>Testing with Redux connected components</li>
              <li>Testing with Apollo connected components</li>
              <li>
                Testing components that use common third party libraries without
                reinventing the wheel
              </li>
              <li>Strategies for automated visual testing of components</li>
            </ul>
          </div>
          <div className={"mx-auto max-w-xs"}>
            {success &&
              "Thanks! I will style this success message soon with a tick or something. I promise."}
            {success === false && "Subscription failed. Reload and try again."}
          </div>
        </div>
        <WiggleDownLine
          className="mx-auto h-24 sm:h-auto mt-6 mb-6"
          aria-hidden
        />
        <div className="max-w-lg mx-auto mt-10">
          <TechList className="flex justify-center flex-wrap" />
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    hexImage: file(relativePath: { eq: "hex.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
