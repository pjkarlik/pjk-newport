import React, { useEffect, useState } from "react"
import CodeItem from "./CodeItem"
import Navigation from "./Navigation"

const Portfolio = ({ posts }) => {
  const [categories, setCategories] = useState([])
  const [codeposts, setPosts] = useState([])

  useEffect(() => {
    const categoryList = []
    const newlist = []

    posts.forEach((item) => {
      if (item.node.frontmatter?.author === "code") {
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
    codeposts.forEach((item) => {
      if (item.node.frontmatter?.icon === category) {
        sectionlist.push(item)
      }
    })
    let SectionTitle = ""
    switch (category) {
      case "shader":
        SectionTitle = "webgl and interactive development"
        break
      case "soundcloud":
        SectionTitle = "audio and sound development"
        break
      case "html":
        SectionTitle = "html and react development"
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

          row.push(<CodeItem key={index} post={node} />)
          //const row = <CodeItem key={index} post={node} />
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
        <Navigation loc="/code" />
        <div className="wrapper-section">
          <h4 className="title-section">code/art</h4>
          <br />
          <p className="text-body-section">
            selected demos / generative artworks and personal projects
            <br />
            <span className="text-sub">デジタルアートワーク</span>
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

export default Portfolio
