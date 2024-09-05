import React from 'react';
import pag from '../../assets/pag.svg';
import ma from '../../assets/ma.svg';
import './style.scss';
    const nftItems = [
  { id: 1, title: 'Distant Galaxy', artist: 'MoonDancer', price: '1.63 ETH' },
  { id: 2, title: 'Distant Galaxy', artist: 'MoonDancer', price: '1.63 ETH' },
  { id: 3, title: 'Distant Galaxy', artist: 'MoonDancer', price: '1.63 ETH' },
  { id: 4, title: 'Distant Galaxy', artist: 'MoonDancer', price: '1.63 ETH' },
  { id: 5, title: 'Distant Galaxy', artist: 'MoonDancer', price: '1.63 ETH' },
  { id: 6, title: 'Distant Galaxy', artist: 'MoonDancer', price: '1.63 ETH' },
];

const Index = () => {
  return (
    <section className="carts">
      <div className="carts-link">
        <div className="carts-link-title container">
          <div className="carts-page">
            <p>Created</p>
          </div>
          <div className="carts-page">
            <p>Owned</p>
          </div>
          <div className="carts-page">
            <p>Collection</p>
          </div>
        </div>
      </div>
      <div className="carts-box container">
        <div className="discover-box1">
          {nftItems.map((item) => (
            <div className="discover-box-itms" key={item.id}>
              <img className="discover-img" src={pag} alt="NFT" />
              <p className="discover-txt">{item.title}</p>
              <span className="discover-title-span">
                <img src={ma} alt="Artist" />
                <p>{item.artist}</p>
              </span>
              <div className="discover-text">
                <div>
                  <p className="color1">Price</p>
                  <p className="color2">{item.price}</p>
                </div>
                <div>
                  <p className="color1">Price</p>
                  <p className="color2">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;
