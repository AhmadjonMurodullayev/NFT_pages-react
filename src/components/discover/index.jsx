import React from 'react';
import discover from '../../assets/discover.svg';
import maysa from '../../assets/maysa.svg';
import './style.scss';

const items = [
  {
    title: 'Distant Galaxy',
    creator: 'MoonDancer',
    price: '1.63 ETH',
    image: discover,
    creatorImage: maysa,
  },
  {
    title: 'Distant Galaxy',
    creator: 'MoonDancer',
    price: '1.63 ETH',
    image: discover,
    creatorImage: maysa,
  },
  {
    title: 'Distant Galaxy',
    creator: 'MoonDancer',
    price: '1.63 ETH',
    image: discover,
    creatorImage: maysa,
  },
];

const Index = () => {
  return (
    <section className="discover container">
      <p className="discover-title">Discover More NFTs</p>
      <p className="discover-dict">Explore new trending NFTs</p>
      <div className="discover-box">
        {items.map((item, index) => (
          <div className="discover-box-itms" key={index}>
            <img className="discover-img" src={item.image} alt={item.title} />
            <p className="discover-txt">{item.title}</p>
            <span className="discover-title-span">
              <img src={item.creatorImage} alt={item.creator} />
              <p>{item.creator}</p>
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
    </section>
  );
};

export default Index;
