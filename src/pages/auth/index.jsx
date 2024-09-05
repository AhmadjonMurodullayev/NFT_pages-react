import "./style.scss"
import creat from '../../assets/creat.svg'
const index = () => {
  return (
  <section className="acaunt">
    <div className="acaunt-img">
      <img className="acaunt-img-1" src={creat} alt />
    </div>
    <div className="acaunt-text">
      <p className="acaunt-title">
        Create account
      </p>
      <p className="acaunt-dics">
        Welcome! enter your details and start creating, collecting and selling NFTs.
      </p>
      <div className="acaunt-user-text">
        <div className="form">
          <i className="fa-solid fa-user" />
          <input type="text" placeholder="   Username" />
        </div>
        <div className="form">
          <i className="fa-solid fa-envelope" />
          <input type="text" placeholder="  Email Address" />
        </div>
        <div className="form">
          <i className="fa-solid fa-lock" />
          <input type="text" placeholder="   Password" />
        </div>
        <div className="form">
          <i className="fa-solid fa-lock" />
          <input type="text" placeholder="   Confirm Password" />
        </div>
      </div>
    </div>
  </section>

  )
}

export default index