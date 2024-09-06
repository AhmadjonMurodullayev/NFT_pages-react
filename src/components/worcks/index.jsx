import React from 'react';
import './style.scss';
import comps from '../../assets/comp.svg';

const steps = [
  {
    title: 'Setup Your wallet',
    description: 'Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.',
    image: comps,
  },
  {
    title: 'Create Collection',
    description: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
    image: comps,  // Assuming the image should be the same for all steps; replace with the correct image if different
  },
  {
    title: 'Start Earning',
    description: 'Upload your work and setup your collection. Add a description, social links, and floor price.',
    image: comps,  // Assuming the image should be the same for all steps; replace with the correct image if different
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
              <img src={step.image} alt={step.title} />
            </div>
            <div className="works-text">
              <p className="works-text-title">{step.title}</p>
              <p className="works-text-desc">{step.description}</p> {/* Fixed typo */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Index;
