import React from "react"
import { MDXProvider } from "@mdx-js/react"

// NOTE: A component list can be passed in so you do not need to
// import components in each MDX file.
// This comes in two parts:
// 1. overrides for Markdown elements (e.g. # -> h1 -> your heading class)
//    https://mdxjs.com/getting-started#table-of-components
// 2. Short codes for custom components
//    https://mdxjs.com/blog/shortcodes
const components = {
  // a: Link,
  // pre: props => props.children,
  // code: Code,
  // inlineCode: InlineCode,
  // table: Table,
  // img: Image,
  // p: Paragraph,
  // hr: HorizontalRule,
  // blockquote: Blockquote,
  // h1: H1,
  // h2: H2,
  // h3: H3,
  // h4: H4,
  // h5: H5,
  // h6: H6,
  // ul: List,
  // ol: List.withComponent('ol'),
  // dl: DescriptionList,
  // // Shortcodes (https://mdxjs.com/blog/shortcodes)
  // Note,
  // Do,
  // Dont,
  // DoDontContainer,
  // Caption,
  // ImageContainer,
}

function wrapRootElement({ element }) {
  return <MDXProvider components={components}>{element}</MDXProvider>
}

export default wrapRootElement
