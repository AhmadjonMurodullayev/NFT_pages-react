import React from 'react';
import maymun from '../../assets/maymun.svg';
import qalam from '../../assets/qalam.svg';
import './style.scss';

const categories = [
  { name: 'Art', imgSrc: qalam },
  { name: 'Collectibles', imgSrc: maymun },
  { name: 'Art', imgSrc: qalam },
  { name: 'Collectibles', imgSrc: maymun },
  { name: 'Art', imgSrc: qalam },
  { name: 'Collectibles', imgSrc: maymun },
  { name: 'Art', imgSrc: qalam },
  { name: 'Collectibles', imgSrc: maymun },
];

const Index = () => {
  return (
    <section className="browse container">
      <p className="browse-logo">Browse Categories</p>
      <div className="browse-box">
        {categories.map((category, index) => (
          <div className="browse-itms" key={index}>
            <img src={category.imgSrc} alt={category.name} />
            <p className="browse-p">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Index;
