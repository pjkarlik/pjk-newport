import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const PortItem = ({ post }) => {
  const { title, slug, icon } = post.node.frontmatter
  const img = post.node.frontmatter.image.childImageSharp.gatsbyImageData
  const postUrl = "../" + slug
  //const iconType = `c-icon icon-${icon}`

  return (
    <div className="code-tile">
      <Link to={postUrl}>
        <div className="code-list-hover">
          <GatsbyImage image={img} alt={title} className="code-list-image" />
        </div>
        <div className="code-text">
          <p className="text-inner">{title}</p>
        </div>
      </Link>
    </div>
  )
}

export default PortItem
