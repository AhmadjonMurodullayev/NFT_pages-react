import React from 'react';
import avatars from '../../assets/avatars.svg';
import icons from '../../assets/icons.svg';
import './style.scss';        

const statistics = [
  { value: '250k+', label: 'Volume' },
  { value: '50k+', label: 'NFTs Sold' },
  { value: '3000+', label: 'Followers' }
];

const Index = () => {
  return (
    <section className="artist">
      <div className="artist-back">
        <div className="artist-img">
          <img src={avatars} alt="Artist Avatars" />
        </div>
      </div>
      <div className="animakid container">
        <div className="animakid-control">
          <p className="animakid-title">Animakid</p>
          <div className="animakid-button hover">
            <button className="animakid-button1">0xc0E3...B79C</button>
            <button className="animakid-button2">Follow</button>
          </div>
          <div className="animakid-number">
            {statistics.map((stat, index) => (
              <div className="animakid-number-1" key={index}>
                <p className="number1">{stat.value}</p>
                <p className="number2">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="animakid-bio">
            <p className="bio-title">Bio</p>
            <p className="bio-dick">The internet's friendliest designer kid.</p>
          </div>
          <div className="links">
            <p className="bio-title">Links</p>
            <img src={icons} alt="Social Media Icons" />
          </div>
        </div>
        <div className="animakid-button non">
          <button className="animakid-button1">
            <img src="../img/animakid button.svg" alt="Button Icon" />
            0xc0E3...B79C
          </button>
          <button className="animakid-button2">
            <i className="fa-solid fa-plus" /> Follow
          </button>
        </div>
      </div>
    </section>
  );
};

export default Index;
