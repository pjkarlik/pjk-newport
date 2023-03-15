import React from "react"
import Navigation from "./Navigation"

const Home = ({ posts }) => {
  return (
    <>
      <section>
        <Navigation loc={`/`} />
        <div className="wrapper">
          <h4 className="title">paul j karlik</h4>
          <p className="text-body">
            creative coder / generative artist / developer
            <br />
            <span className="text-sub">クリエイティブプログラマー</span>
          </p>
          <div className="card">
            <iframe
              height="380"
              width="100%"
              scrolling="no"
              title="Hash Fractals"
              src="https://codepen.io/pjkarlik/embed/jOYMMWq/76e274a7fa94bc5473db04d2c9867012?theme-id=light"
              frameborder="no"
              loading="lazy"
              allowtransparency="true"
              allowfullscreen="true"
            ></iframe>
            <p className="text-feat">
              WebGL Interactive Fragment Shader.
              <br />
              Series of 50 generative fractals as NFT's on the tezos blockchain.
              <br />
              <a href="./fractal-formations">read more here</a>, or check out
              the live generative tokens on{" "}
              <a href="https://www.fxhash.xyz/generative/6636">fxhash.xyz</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
//jOYMMWq/76e274a7fa94bc5473db04d2c9867012
//https://codepen.io/pjkarlik/pen/OJzKZzg/791d7568d86b8de46443d673b84db91e
// WebGL Fragment Shader. Raymarching dynamic fractals on the tezos
// blockchain. Part of a series of 50 NFT's on{" "}
// <a href="https://www.fxhash.xyz/generative/6636">fxhash.xyz</a>.
