import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Banner1 from '../components/banner1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Foolish Satisfied Frog</title>
        <meta property="og:title" content="Foolish Satisfied Frog" />
      </Helmet>
      <Banner1
        action1={
          <Fragment>
            <span className="home-text1">Call to Action</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text2">Company mission statement</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text3">Company Name</span>
          </Fragment>
        }
      ></Banner1>
    </div>
  )
}

export default Home
