import React, { useEffect } from "react"
const isBrowser = typeof window !== "undefined"

const Button = (item, loc, index) => {
  return (
    <li key={`link-{item.path}-${index}`}>
      <a
        className={loc === item.path ? "current" : null}
        href={`${item.path}`}
        title={item.text}
      >
        {item.label}
      </a>
    </li>
  )
}

const menuarray = [
  { path: "/", label: "home", text: "my homepage ホームページ" },
  {
    path: "/code",
    label: "code / art",
    text: "checkout my stuff デジタル作品",
  },
  { path: "/blog", label: "blog posts", text: "my thoughts ブログ投稿" },
  { path: "/abstract", label: "abstract", text: "about and resume 私について" },
  { path: "/links", label: "links", text: "resource links リソースリンク" },
]

const Navigation = ({ loc }) => {
  useEffect(() => {
    if (isBrowser) window.scrollTo(0, 0)
  }, [])
  const mainMenu = menuarray.map((item, index) => {
    return Button(item, loc, index)
  })
  return <ul className="navigation">{mainMenu}</ul>
}

export default Navigation
