// Write your JS code here

import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', error: ''}

  changeRoute = () => {
    console.log('hii')
    const {history} = this.props
    console.log(history)
    history.replace('/')
  }

  errorMess = value => {
    console.log(value)
    this.setState({error: value})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)

    // console.log(response)
    const data = await response.json()
    // console.log(data)

    if (response.ok === true) {
      this.changeRoute()
    } else {
      this.errorMess(data.error_msg)
      // this.setState({error: "*Username and Password didn't match"})
    }
  }

  inputChange = event => {
    this.setState({username: event.target.value})
  }

  passwordChange = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {error} = this.state
    return (
      <div className="login-con">
        <div className="img-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login"
          />
        </div>

        <form className="form-con" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="nxtwave-logo"
          />
          <label htmlFor="username">Username</label>
          <input
            onChange={this.inputChange}
            type="text"
            id="username"
            placeholder="Username"
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={this.passwordChange}
            type="password"
            id="password"
            placeholder="password"
          />
          <div className="but-con">
            <button type="submit">Login</button>
          </div>
          <p className="error">{error}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
