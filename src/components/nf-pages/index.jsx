import React from 'react'
import hayol from "../../assets/hayol.svg"
import soa from "../../assets/soa.svg"
import './style.scss'
const index = () => {
  return (
<section className="ntf-pages">
  <div className="ntf-img">
    <img src={hayol} alt />
  </div>
  <div className="ntf-box container">
    <div className="ntf-text">
      <div className="ntf-itms">
        <p className="ntf-logo">The Orbitians</p>
        <p className="ntf-disc">
          Minted on Sep 30, 2022
        </p>
      </div>
      <div className="cloc non">
       <img src={soa} alt="" />
      </div>
      <p className="ntf-disc">
        Created By
      </p>
      <span className="ntf-span">
        <img src="../img/dish.svg" alt />
        <p className="span-title">
          Dish Studio
        </p>
      </span>
      <p className="ntf-disc">
        Description
      </p>
      <p className="nts-title">The Orbitians
        is a collection of 10,000 unique NFTs on the Ethereum blockchain,
      </p>
      <p className="nts-title">
        There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch
        are Orbitians.
      </p>
      <p className="nts-title">
        They live in a metal space machines, high up in the sky and only have one foot on Earth.
        These Orbitians are a peaceful race, but they have been at war with a group of invaders for many
        generations. The invaders are called Upside-Downs, because of their inverted bodies that live on
        the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to
        win this war if they could only get an eye into Orbitian territory, so they've taken to make
        human beings their target.
      </p>
      <p className="ntf-disc">
        Details
      </p>
      <span className="ntf-span">
        <img src="../img/inertnet.svg" alt />
        <p className="ntf-title">
          View on Etherscan
        </p>
      </span>
      <span className="ntf-span">
        <img src="../img/inertnet.svg" alt />
        <p className="ntf-title">
          View Original
        </p>
      </span>
      <p className="ntf-disc">
        Tags
      </p>
      <div className="ntf-tags">
        <div className="tags-itms1">
          <p className="tag-itms-title">
            Animation
          </p>
        </div>
        <div className="tags-itms2">
          <p className="tag-itms-title">
            illustration
          </p>
        </div>
        <div className="tags-itms3">
          <p className="tag-itms-title">
            moon
          </p>
        </div>
        <div className="tags-itms3">
          <p className="tag-itms-title">
            moon
          </p>
        </div>
      </div>
    </div>
    <di v className="cloc bloc">
      <img src={soa} alt srcSet />
    </di></div>
</section>

  )
}

export default index