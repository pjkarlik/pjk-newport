import React from "react"
import Navigation from "./Navigation"
import { GatsbyImage } from "gatsby-plugin-image"
const selfie = "https://assets.codepen.io/163598/SiteProfileBlank.jpg"

const Abstract = ({ posts }) => {
  return (
    <>
      <section>
        <Navigation loc="/abstract" />
        <div className="wrapper-section">
          <h4 className="title-section">abstract</h4>
          <br />
          <p className="text-body-section">
            about me / my resume / and artist information
            <br />
            <span className="text-sub">私と私の仕事について</span>
          </p>
          <div className="card">
            <h4>Hi I'm Paul</h4>
            <img
              src={selfie}
              width="150"
              style={{
                display: "inline-block",
                padding: "0 1rem 0 0",
                vAlign: "top",
              }}
            />
            <br />
            <br />
            <p className="text-info">
              I started to play with a computer when I was 11 after my dad had
              to bring one home for work. It was an 8 line Epson luggable, and I
              quickly began hacking away making my first ASCII based games.
            </p>
            <br />
            <br />
            <p className="text-info">
              I saw the computer as a way to make art, sound, almost anything
              you could think of. I spent hours reading computer books, typing
              in the code, just to make something move on the screen.
            </p>
            <br />
            <br />
            <p className="text-info">
              I went to college at the Art Institutes in Chicago and it was
              there I found interactive art and how to use code to create
              expressions with design. This is also where I got my start in web
              as an intern, which turned into my career.
            </p>
            <br />
            <br />
            <p className="text-info">
              Deep down I am just someone that likes to create, if for no one
              else other than myself. I'm fascinated how math and code and make
              an emotion, or the response to changing sounds as users click a
              button. This is what keeps me creating, to see that interaction,
              to make a spark in otherwise dim world.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Abstract
