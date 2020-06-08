import React, { useState, useLayoutEffect, useEffect } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import Layout from "../components/Layout"
import TechList from "../components/TechList"
import WiggleDownLine from "../svgs/wiggle-down-line.svg"
import { graphql, Link } from "gatsby"
import Book from "../components/Book"
import XCircleSvg from "../svgs/x-circle.svg"
import CompassSvg from "../svgs/compass.svg"
import LayersSvg from "../svgs/layers.svg"
import MaximizeSvg from "../svgs/maximize.svg"
import BarChartSvg from "../svgs/bar-chart.svg"
import CheckCircleSvg from "../svgs/check-circle.svg"
import LogInSvg from "../svgs/log-in.svg"
import MinimizeSvg from "../svgs/minimize.svg"
import MousePointerSvg from "../svgs/mouse-pointer.svg"
import SendSvg from "../svgs/send.svg"
import ThumbsUpSvg from "../svgs/thumbs-up.svg"
import SEO from "../components/SEO"

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
      <SEO
        title={"React Component Testing e-book"}
        description="A toolkit of strategies for testing React components with Jest and React Testing Library"
        imageUrl="https://static-2.gumroad.com/res/gumroad/2491236292092/asset_previews/13d644b9741a1fc745a40a49d67d1394/retina/Screenshot_202020-06-08_2009.33.08.png"
      ></SEO>
      <article className="pt-12 pb-20 mt-4" id="footer">
        <div className="max-w-lg flex justify-center flex-col items-center justify-center mx-auto">
          <Book />
          <div className="inline-flex items-center text-gray-800 mt-2">
            <span
              className="font-bold"
              style={{ textDecoration: "line-through" }}
            >
              $80
            </span>
            <span className="font-bold text-lg">&nbsp;$32</span>
            <span>&nbsp;with code pre-order</span>
          </div>
          <a
            className="gumroad-button mt-4"
            href="https://gum.co/lWvh"
            target="_blank"
          >
            <span className="text-gray-800">Make Pre-order</span>
          </a>
        </div>
        <div className="flex justify-center mt-8 sm:mt-16 max-w-lg mx-auto">
          <section
            className="border border-gray-400 inline-block p-4 sm:p-8 rounded-md w-full"
            style={{ backgroundColor: "#f7f7f8" }}
          >
            <h2 className="font-header text-gray-800 text-md sm:text-lg leading-tight mx-auto text-center">
              Get FREE chapters from{" "}
              <div>
                <b>React Component Testing</b>
              </div>{" "}
              as it's being written
            </h2>
            {success === null && (
              <>
                <form
                  onSubmit={handleSubmit}
                  className="h-16 max-w-sm flex mx-auto mt-8 border border-gray-200 rounded focus-within:border-gray-500 bg-white"
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
              </>
            )}
            {success && (
              <div className="h-16 mx-auto w-20 mt-8 flex items-center">
                <span>Subscribed</span>
                <ThumbsUpSvg className="flex-shrink-0 ml-4" />
              </div>
            )}
          </section>
        </div>
        <div className="px-6">
          <div className="max-w-lg mx-auto mt-8 sm:mt-16">
            <h2 className="text-md mb-4">
              A toolkit of strategies for testing React components with&nbsp;
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
            <div className="mx-auto text-sm">
              <section>
                <h2 className="font-semibold">Learn the fundamentals</h2>
                <ul>
                  <Item>
                    <LayersSvg className="mr-2 flex-shrink-0" />
                    Integration tests for testing components and their
                    dependencies
                  </Item>
                  <Item>
                    <MaximizeSvg className="mr-2 flex-shrink-0" />
                    Unit tests that don't accidentally test dependencies
                  </Item>
                  <Item>
                    <CompassSvg className="mr-2 flex-shrink-0" />
                    How to best leverage mocks and spies to test your components
                  </Item>
                  <Item>
                    <MousePointerSvg className="mr-2 flex-shrink-0" />
                    How to test behavior instead of implementation to allow some
                    flexibility in your code and ensure it does what users want
                  </Item>
                  <Item>
                    <XCircleSvg className="mr-2 flex-shrink-0" />
                    How best to test component implementation when it's your
                    only choice
                  </Item>
                </ul>
              </section>
              <section className="mt-4">
                <h2 className="font-semibold">
                  Then learn strategies for specific contexts
                </h2>
                <ul>
                  <Item>
                    <BarChartSvg className="mr-2 flex-shrink-0" />
                    Strategies for testing visual graphs made with SVG
                  </Item>
                  <Item>
                    <CheckCircleSvg className="mr-2 flex-shrink-0" />
                    Testing with Redux connected components
                  </Item>
                  <Item>
                    <SendSvg className="mr-2 flex-shrink-0" />
                    Testing with components using Apollo
                  </Item>
                  <Item>
                    <LogInSvg className="mr-2 flex-shrink-0" />
                    Testing components that use common third party libraries
                    without reinventing the wheel
                  </Item>
                  <Item>
                    <MinimizeSvg className="mr-2 flex-shrink-0" />
                    Strategies for automated visual testing of components
                  </Item>
                </ul>
              </section>
            </div>
          </div>
        </div>
        <WiggleDownLine
          className="mx-auto h-24 sm:h-auto mt-6 mb-6"
          aria-hidden
        />
        <section className="max-w-lg mx-auto mt-10">
          <h2 className="text-sm mb-4 text-center link">
            <Link to="/articles">Other content from my blog</Link>
          </h2>
          <TechList className="flex justify-center flex-wrap" />
        </section>
      </article>
    </Layout>
  )
}

function Item({ children }) {
  return <li className="flex mt-4">{children}</li>
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
