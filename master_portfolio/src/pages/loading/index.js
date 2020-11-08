import React, { Component } from 'react';
import '../loading/style.css';
import { Redirect } from 'react-router-dom';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import PuffLoader from "react-spinners/PuffLoader";

class Loading extends Component {

  state = {
    redirect: false
  }
  // G-574RSBTN1L
  // 2122026031
  // https://www.suryatejatanuku.in
  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 3000);
    //--Surya Teja Tanukus Portfolio website Google analytics--
    //--Replace with your own key !!
    // StreamId 2121300418
    ReactGA.initialize("G-574RSBTN1L");
    ReactGA.pageview('suryatejatanuku.in - Loading Screen');
    //--Surya Teja Tanukus Portfolio website Google analytics--
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render() {
    return this.state.redirect
      ? <Redirect to="/home" />
      : <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Surya Teja Tanuku</title>
          <link rel="canonical" href="http://suryatejatanuku.in/" />
          <meta name="description" content="Surya Teja Tanuku - Forensic Specialist | Full Stack Developer | AWS Devops Consultant" />
        </Helmet>
        <div className="Loading-header">
          <PuffLoader
            size={'40vw'}
            color={"#fff"}
            loading={true}
          />
        </div>
      </div>
  }
}

export default Loading;
