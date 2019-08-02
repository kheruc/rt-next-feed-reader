import React from 'react';
import App, {Container} from 'next/app';
import Layout from '../components/layout';
// import feeds from '../data/feeds';

class MyApp extends App {
  // componentDidMount() {
  //   localStorage.setItem('_feeds', JSON.stringify(feeds));
  // }
  render() {
    const {Component, pageProps} = this.props;
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default MyApp;
