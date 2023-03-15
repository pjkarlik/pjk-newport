import React, { useEffect, useState } from "react"
import BlogItem from "./BlogItem"
import Navigation from "./Navigation"

const BlogPost = ({ posts }) => {
  const [categories, setCategories] = useState([])
  const [blogposts, setPosts] = useState([])

  useEffect(() => {
    const categoryList = []
    const newlist = []

    posts.forEach((item) => {
      if (item.node.frontmatter?.author === "blog") {
        categoryList.push(item.node.frontmatter.icon)
        newlist.push(item)
      }
    })
    let cat = categoryList.filter((c, index) => {
      return categoryList.indexOf(c) === index
    })
    cat.sort()
    setCategories(cat)
    setPosts(newlist)
  }, [])

  const makeSection = (category) => {
    const sectionlist = []
    blogposts.forEach((item) => {
      if (item.node.frontmatter?.icon === category) {
        sectionlist.push(item)
      }
    })
    let SectionTitle = ""
    switch (category) {
      case "shader":
        SectionTitle = "webgl and graphics coding"
        break
      case "soundcloud":
        SectionTitle = "audio and sound development"
        break
      case "html":
        SectionTitle = "html and react tricks"
        break
      default:
        SectionTitle = category
    }

    const amount = sectionlist.length
    const cols = 4

    let row = []
    return (
      <div className="card-section">
        <h4>{SectionTitle}</h4>
        {sectionlist.map((node, index) => {
          const modulus = (index + 1) % cols === 0

          row.push(<BlogItem key={index} post={node} />)
          if (modulus || index + 1 === amount) {
            const tempRow = row
            row = []
            return <div className="list-container">{tempRow}</div>
          }
        })}
      </div>
    )
  }

  return (
    <>
      <section>
        <Navigation loc={`/blog`} />
        <div className="wrapper-section">
          <h4 className="title-section">blog posts</h4>
          <br />
          <p className="text-body-section">
            code snippets / infomation and text things
            <br />
            <span className="text-sub">私のブログ投稿</span>
          </p>
          <div className="card">
            {categories.map((item) => {
              return makeSection(item)
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPost
