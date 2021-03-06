import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';
import { buddhas } from '../../utils/buddhas';

class Landing extends Component {

  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/dashboard")
    }
  }

  render() {

    return (
      <div id="landing">
        <div className="container landing-container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 mb-4">
                Daily Management Tool
                </h1>
              <p className="lead">
                Create your account to join Assignment or start your own
                </p>
              <hr />
              <Link className="btn btn-lg btn-green mr-2" to="/register">
                Sign Up
                </Link>
              <Link className="btn btn-lg btn-primary mr-2" to="/login">
                Login
                </Link>
            </div>
          </div>

          <div id="typewriter">

            <Typewriter
              options={{
                strings: buddhas.map((element) =>
                  buddhas[Math.floor(Math.random() * buddhas.length)]),
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 10,

              }}

            />
          </div></div>
      </div >
    );
  }
}

Landing.propTypes = {
  security: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  security: state.security
})

export default connect(mapStateToProps)(Landing);
