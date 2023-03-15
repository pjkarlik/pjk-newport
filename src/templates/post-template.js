import React from "react"
import { graphql, navigate } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Navigation from "../components/Navigation"

import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Content = styled.div`
  p {
    font-size: 0.865rem;
    color: #aaa;
    margin-top: 0px;
    line-height: 1.5;
  }
  h4 {
    color: #555;
    margin: 32px 0 8px 0;
    padding: 0;
    line-height: 1.5;
  }
  img {
    width: 100%;
  }

  strong {
    color: #444;
  }
`

const Title = styled.h1`{
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--dark);
  margin-top: .25rem;
  margin-bottom: .25rem;
`
const ByLine = styled.h4`{
  font-size: .55rem;
  font-weight: 300;
  color: var(--dark);
  margin-top: 0;
  margin-bottom: .25rem;
`

const PostTemplate = ({ data }) => {
  const { title, date, author, image } = data.mdx.frontmatter
  const { body } = data.mdx
  const img = getImage(image.childImageSharp.gatsbyImageData)

  const imageArea = null
  // author === "code" ? null : <GatsbyImage image={img} alt={title} />

  return (
    <Layout>
      <section>
        <Navigation loc={`/${author}`} />
        <div className="wrapper-page">
          <button className="page-back" onClick={() => navigate(-1)}>
            back
          </button>
          <div className="card">
            <Title>{title}</Title>
            <ByLine>
              <span>pjkarlik</span> | <span>{author}</span> |{" "}
              <span>{date}</span>
            </ByLine>

            {imageArea}

            <Content>
              <br />
              <MDXRenderer>{body}</MDXRenderer>
              <br />
            </Content>
          </div>

          <br />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        date(formatString: "MMMM Do, YYYY")
        author
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      body
    }
  }
`

export default PostTemplate
