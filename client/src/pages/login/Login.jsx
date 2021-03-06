import './login.css'
import { useContext, useRef } from 'react'
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext'
import { CircularProgress } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function Login() {
  const email = useRef()
  const password = useRef()
  const { isFetching, dispatch } = useContext(AuthContext)

  const handleClick = e => {
    e.preventDefault()
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    )
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Fakebook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Fakebook.
          </span>
        </div>
        <form className="loginRight" onSubmit={handleClick}>
          <div className="loginBox">
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="3"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="30px" />
              ) : (
                'Log In'
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to={'/Register'}>
              <button className="loginRegisterButton">
                {isFetching ? (
                  <CircularProgress color="white" size="30px" />
                ) : (
                  'Create A New Account'
                )}
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
