import "./style.scss"
const index = () => {
  return (
    <>
<footer>
  <div className=" footer-blog container">
    <div className="footer-link">
      <div className="footer-logo">
          <h4>NFT Marketplace</h4>
      </div>
        <p className="footer-dics">
          NFT marketplace UI created with Anima for Figma.
        </p>
        <p>
          Join our community
        </p>
    </div>
    <div className="footer-explore">
        <p className="footer-title">
          Explore
        </p>
        <p>Marketplace</p>
        <p>
          Rankings
        </p>
        <p>
          Connect a wallet
        </p>
    </div>
    <div className="footer-digest">
      <p className="footer-digest-title">
        Join our weekly digest
      </p>
      <p>
        Get exclusive promotions &amp; updates straight to your inbox.  
      </p>
      <div className="digest-pages">
        <input type="text" placeholder="Enter Your Email Address" />
        <button><i className="fa-regular fa-envelope" />  Subscribe</button>
      </div>
    </div>
  </div>
  <p className="footer-botton">
    Ⓒ NFT Market. Use this template freely.
  </p>
</footer>

      
    </>
  )
}

export default index