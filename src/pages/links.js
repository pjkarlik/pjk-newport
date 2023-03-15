import React from "react"
import Links from "../components/Links"
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
            icon
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
  //const response = useStaticQuery(getPosts)

  const posts = {} //response.allMdx.edges

  return (
    <Layout>
      <Links posts={posts} />
    </Layout>
  )
}

export default IndexPage
