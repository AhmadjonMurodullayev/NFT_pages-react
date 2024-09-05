import React from 'react'
import soat from "../../assets/soat.svg"
import maysa from "../../assets/maysa.svg"
import './style.scss'
const index = () => {
  return (
<section className="mashrooms">
  <div className="mashrooms-becraunt">
    <div className="mashrooms-blog">
      <div className="mashrooms-texts-dumaloq">
        <img src={maysa} alt="pas" />
        <p>
          Shroomie
        </p>
      </div>
      <div>
        <p className="mashrooms-title">
          Magic Mashrooms
        </p>
        <button className="mashrooms-button">
          <i className="fa-solid fa-eye" />
          See NFT
        </button>
      </div>
      <div className="mashrooms-img">
        <img src={soat} alt />
      </div>
    </div>
  </div></section>

  )
}

export default index