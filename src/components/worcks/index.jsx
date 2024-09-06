import React from 'react';
import './style.scss';
import comp from '../../assets/comp.svg';

const steps = [
  {
    title: 'Setup Your wallet',
    description: 'Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.',
    image: comp,
  },
  {
    title: 'Create Collection',
    description: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
    image: copm,
  },
  {
    title: 'Start Earning',
    description: 'Upload your work and setup your collection. Add a description, social links, and floor price.',
    image: comp,
  },
];

const Index = () => {
  return (
    <section className="works container">
      <p className="works-title">How it works</p>
      <p className="works-disc">Find out how to get started</p>
      <div className="works-box">
        {steps.map((step, index) => (
          <div className="works-box-itms" key={index}>
            <div className="works-img">
              <img src={comp} alt={step.title} />
            </div>
            <div className="works-text">
              <p className="works-text-title">{step.title}</p>
              <p className="works-text-dick">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Index;
