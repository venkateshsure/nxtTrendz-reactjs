// Write your JS code here

import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="con">
    <Header />

    <div className="home-con">
      <div className="home">
        <h1>Clothes that get you noticed</h1>
        <p>
          Fashion is part of the daily air it does not quite that changes all
          the time.clothes have always been a marker of the era and we are in a
          revolution.
        </p>
        <button type="button">Shop Now</button>
      </div>
      <div className="img-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="img"
        />
      </div>
    </div>
  </div>
)

export default Home
