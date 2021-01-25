import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Blog from "../components/Blog"
import Blogs from "../components/blogs"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <Blog />
    <Blogs />
    <Footer />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
