import React from "react"
import LogoImage from "./Image"
import { Link } from "gatsby"
import RssSvg from "../svgs/rss.svg"

const Header = () => {
  return (
    <nav className={"z-10"}>
      <div
        className={
          "block flex px-5 border-b h-16 border-gray-100 justify-between relative font-header"
        }
      >
        <Link
          to={"/"}
          className={
            "flex items-center self-center hover:scale-110 transform transition-transform duration-200 ease-in"
          }
        >
          <LogoImage />
        </Link>
        <div
          className={
            "sm:border-l border-gray-100 my-3 flex items-center tracking-wide text-gray-700 pl-6 font-bold text-xsm"
          }
        >
          <Link
            to={"/react-component-testing-book"}
            className="hover:text-gray-500 mr-6 uppercase"
          >
            e-book
          </Link>
          <Link to={"/articles"} className="hover:text-gray-500 uppercase">
            Articles
          </Link>
          <a href="/rss.xml">
            <span className="sr-only">RSS Feed</span>
            <RssSvg className="ml-6 hover:text-gray-500" aria-hidden />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
