import React from 'react';
import brat from '../../assets/brat.svg';
import './style.scss';

const digestItems = [
  {
    id: 1,
    image: brat,
    title: 'Join Our Weekly Digest',
    description: 'Get exclusive promotions & updates straight to your inbox.',
  },
];

const Index = () => {
  return (
    <section className="digest container">
      {digestItems.map(item => (
        <div className="digest-box" key={item.id}>
          <div className="digest-img">
            <img src={item.image} alt="Digest Illustration" />
          </div>
          <div className="digest-text">
            <p className="digest-title">{item.title}</p>
            <p className="digest-dect">{item.description}</p>
            <div className="digest-pages">
              <input type="email" placeholder="Enter Your Email Address" />
              <button>
                <i className="fa-regular fa-envelope" /> Subscribe
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Index;
