import React from 'react';
import './style.scss';
import trending from '../../assets/trending1.svg';
import trending2 from '../../assets/trending2.svg';
import avatar from '../../assets/Avatar.svg';

const trendingItems = [
  {
    mainImg: trending,
    additionalImgs: [trending2, trending2, trending2],
    title: 'DSGN Animals',
    bottomImg: avatar,
    bottomText: 'MrFox'
  },
  {
    mainImg: trending,
    additionalImgs: [trending2, trending2, trending2],
    title: 'DSGN Animals',
    bottomImg: avatar,
    bottomText: 'MrFox'
  },
  {
    mainImg: trending,
    additionalImgs: [trending2, trending2, trending2],
    title: 'DSGN Animals',
    bottomImg: avatar,
    bottomText: 'MrFox'
  }
];

const Index = () => {
  return (
    <section className="trending container">
      <div>
        <p className="trending-logo-title">Trending Collection</p>
        <p className="trending-logo-dect">
          Checkout our weekly updated trending collection.
        </p>
        <div className="trending-box">
          {trendingItems.map((item, index) => (
            <div key={index} className="trending-box-itm">
              <img src={item.mainImg} alt="Main" />
              <div className="box-itms">
                {item.additionalImgs.map((imgSrc, idx) => (
                  <img key={idx} src={imgSrc} alt={`Additional ${idx}`} />
                ))}
              </div>
              <p className="box-logs">{item.title}</p>
              <div className="box-bottom">
                <img src={item.bottomImg} alt="Bottom" />
                <h6>{item.bottomText}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;
