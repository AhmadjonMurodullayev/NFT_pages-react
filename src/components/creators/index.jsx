import React from 'react';
import main from '../../assets/main.svg';
import main2 from '../../assets/main2.svg';
import './sytyle.scss';

const creatorsData = [
  { name: 'Keepitreal', imgSrc: main, totalSales: '34.53 ETH' },
  { name: 'DigiLab', imgSrc: main2, totalSales: '34.53 ETH' },
  { name: 'Keepitreal', imgSrc: main, totalSales: '34.53 ETH' },
  { name: 'DigiLab', imgSrc: main2, totalSales: '34.53 ETH' },
  { name: 'Keepitreal', imgSrc: main, totalSales: '34.53 ETH' },
  { name: 'DigiLab', imgSrc: main2, totalSales: '34.53 ETH' },
  { name: 'Keepitreal', imgSrc: main, totalSales: '34.53 ETH' },
  { name: 'DigiLab', imgSrc: main2, totalSales: '34.53 ETH' },
  { name: 'Keepitreal', imgSrc: main, totalSales: '34.53 ETH' },
  { name: 'DigiLab', imgSrc: main2, totalSales: '34.53 ETH' },
  { name: 'Keepitreal', imgSrc: main, totalSales: '34.53 ETH' },
  { name: 'DigiLab', imgSrc: main2, totalSales: '34.53 ETH' },
];

const Index = () => {
  return (
    <section className="creators container">
      <div className="creators-bosh">
        <div className="creators-logo">
          <div className="creators-text">
            <p className="creators-title">Top creators</p>
            <p className="creators-desc">
              Checkout Top Rated Creators on the NFT Marketplace
            </p>
          </div>
          <div className="creators-button">
            <button>
              <i className="fa-solid fa-rocket" /> View Rankings
            </button>
          </div>
        </div>
        <div className="creators-box">
          {creatorsData.map((creator, index) => (
            <div className="creators-box-itms" key={index}>
              <img src={creator.imgSrc} alt={creator.name} />
              <div className="dis-non">
                <p className="creators-pages-text">{creator.name}</p>
                <span className="creators-span">
                  <p className="creators-tia">Total Sales:</p>
                  <p className="creators-cloc">{creator.totalSales}</p>
                </span>
              </div>
            </div>
          ))}
          <div className="creators-button-non">
            <button>
              <i className="fa-solid fa-rocket" /> View Rankings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
