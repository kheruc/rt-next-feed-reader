import fetch from 'isomorphic-unfetch';
import Error from '../_error';
// import {useState, useEffect} from 'react';
import Page from '../../components/page';
import PostList from '../../components/post-list';

function encodeURI(url) {
  return url.replace(/\//g, '_');
}

export default class Feed extends React.Component {
  static async getInitialProps({query}) {
    return {slug: query.slug};
  }
  constructor(props) {
    super(props);
    this.state = {
      feed: null,
    };
  }
  componentDidMount() {
    let storedFeeds = JSON.parse(localStorage.getItem('_feeds'));
    const filtered = storedFeeds.filter(item => item.slug === this.props.slug);

    if (filtered.length > 0) {
      let feed = filtered[0];

      fetch(`/api/${encodeURI(feed.url)}`)
        .then(res => res.json())
        .then(posts => {
          feed.posts = posts;
          console.log(posts);
          this.setState({feed});
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    let {feed} = this.state;
    console.log(feed);
    return (
      <div>
        {feed ? (
          <Page title={feed.title}>
            <div>
              <div className="feed">
                <img
                  className="image"
                  src={`//logo.clearbit.com/${feed.website.split('/')[2]}`}
                />
                <h1>{feed.title}</h1>
                <div className="links">
                  <a href={feed.website} target="_blank">
                    Website
                  </a>
                  <span> | </span>
                  <a href={feed.url} target="_blank">
                    RSS Feed
                  </a>
                </div>
              </div>
              <PostList posts={feed.posts} slug={feed.slug} />
            </div>
          </Page>
        ) : (
          <div>....</div>
        )}
        <style jsx>{`
          .feed {
            margin-bottom: 30px;
            overflow: hidden;
          }
          h1 {
            margin: 0 0 10px 0;
            font-size: 33px;
            line-height: 1.2;
          }
          .image {
            float: left;
            width: auto;
            height: 110px;
            margin: 0 20px 20px 0;
          }
        `}</style>
      </div>
    );
  }
}
