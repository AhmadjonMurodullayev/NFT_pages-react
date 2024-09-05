import React from 'react'
import "./style.scss"
import hero from "../../assets/hero.svg"
import Avatr from "../../assets/Avatar.svg"
const Index = () => {
  return (
    <>
    <div className="hero container">
  <div className="hero-pages1">
    <p className="hero-title">
      Discover digital art &amp; Collect NFTs
    </p>
    <p className="hero-title2">
      NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT
      artists.</p>
    <div className="hero-pages1-img">
      <img className="img" src={hero} alt="avatr" />
      <p className="hero-p1">
        Space Walking
      </p>
      <span className="hero-span">
        <img src={Avatr} alt="hero" />
        <p className="hero-p2">
          Animakid
        </p>
      </span>
    </div>
    <button className="hero-button"> <i className="fa-solid fa-rocket" /> Get Started</button>
    <div className="hero-number-nons">
      <span>
        <p className="hero-bod-nons">240k+ </p>
        <p>Total Sale</p>
      </span>
      <span>
        <p className="hero-bod-nons">100k+ </p>
        <p>Auctions</p>
      </span>
      <span className="spn-non">
        <p className="hero-bod-nons">
          240k+
        </p>
        <p>
          Artists
        </p>
      </span>
    </div>
  </div>
  <div className="hero-pages22">
    <p className="hero-title22">
      Discover digital art &amp; Collect NFTs
    </p>
    <p className="hero-title2">
      NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT
      artists.
    </p>
    <button id="hero-button"> <i className="fa-solid fa-rocket" /> Get Started</button>
    <div className="hero-number">
      <span>
        <p className="hero-bod">240k+ </p>
        <p>Total Sale</p>
      </span>
      <span>
        <p className="hero-bod">100k+ </p>
        <p>Auctions</p>
      </span>
      <span className="spn">
        <p className="hero-bod">
          240k+
        </p>
        <p>
          Artists
        </p>
      </span>
    </div>
  </div>
  <div className="hero-pages2">
    <div className="hero-pages-img">
      <img src={hero} alt />
    </div>
    <div className="hero-pages2-text">
      <p className="hero-pages2-txt">
        Space Walking
      </p>
    </div>
    <span className="hero-pages2-span">
      <img src={Avatr} alt="mayda" />
      <p className="mayda-text">
        Animakid
      </p>
    </span>
  </div>
</div>
    </>
  )
}

export default Index