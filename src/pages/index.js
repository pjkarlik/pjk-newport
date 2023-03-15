import React from "react"
import Home from "../components/Home"
import Layout from "../components/layout"

import { useStaticQuery, graphql } from "gatsby"

const getPosts = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM Do, YYYY")
            author
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
const IndexPage = () => {
  const response = useStaticQuery(getPosts)
  const posts = response.allMdx.edges
  let shortList = posts
  shortList.length = 3
  return (
    <Layout>
      <Home posts={shortList} />
    </Layout>
  )
}

export default IndexPage
