import React from "react"
import Navigation from "./Navigation"

const Links = ({ posts }) => {
  return (
    <>
      <section>
        <Navigation loc="/links" />
        <div className="wrapper-section">
          <h4 className="title-section">links</h4>
          <br />
          <p className="text-body-section">
            resources / my other links / contact
            <br />
            <span className="text-sub">リンクとリソース</span>
          </p>
          <div className="card">
            <div className="card-section">
              <h4>Personal/Profile Links</h4>
              <ul>
                <li>
                  <a href="https://codepen.io/pjkarlik/">CodePen.io</a>
                </li>
                <li>
                  <a href="https://github.com/pjkarlik">Github</a>
                </li>
                <li>
                  <a href="https://www.shadertoy.com/user/byt3_m3chanic">
                    Shadertoy
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/paul-karlik-872aa724/">
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-section">
              <h4>Resource Links</h4>
              <ul>
                <li>
                  <a href="https://thebookofshaders.com/">
                    The Book of Shaders
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Gargaj/Bonzomatic">Bonzomatic</a>
                </li>
                <li>
                  <a href="https://webglfundamentals.org/">
                    Webgl Fundamentals
                  </a>
                </li>
                <li>
                  <a href="https://twgljs.org/">
                    TWGL: A Tiny WebGL helper Library
                  </a>
                </li>
                <li>
                  <a href="https://iquilezles.org/">Inigo Quilez</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Links
