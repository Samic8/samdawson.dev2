import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"

const Layout = ({ children, useColoredBackground }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <div
        className={
          "flex flex-col items-stretch mx-auto max-w-5xl sm:overflow-hidden pb-32"
        }
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          className={`font-sans flex flex-shrink flex-grow min-w-0 px-5 pb-10`}
        >
          <div className={`w-full`}>
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
