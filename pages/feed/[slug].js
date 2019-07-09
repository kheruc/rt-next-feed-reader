import fetch from 'isomorphic-unfetch';
import Error from '../_error';
import Page from '../../components/Page';
import PostList from '../../components/post-list';

export default function Feed({ feed }) {
  if (feed.error) {
    return <Error statusCode={404} />;
  }

  return (
    <Page title={feed.title}>
      <div className="feed">
        <img className="image" src={`/static/images/${feed.slug}.png`} />
        <h1>{feed.title}</h1>
        <div className="links">
          <a href={feed.website} target="_blank">
            Website
          </a>{' '}
          |{' '}
          <a href={feed.url} target="_blank">
            RSS Feed
          </a>
        </div>
      </div>

      {feed.posts.length ? <PostList posts={feed.posts} /> : <div>Posts are not available at the moment</div>}
      <style jsx>{`
        .feed {
          margin-bottom: 30px;
          overflow: hidden;
        }
        h1 {
          color: #555;
          margin: 0 0 10px 0;
          font-size: 33px;
          line-height: 1.2;
        }
        .image {
          float: left;
          width: 110px;
          height: 110px;
          margin: 0 20px 20px 0;
        }
      `}</style>
    </Page>
  );
}

Feed.getInitialProps = async ({ res, query }) => {
  let r = await fetch(`http://localhost:3000/api/feeds/${query.slug}`);
  let feed = await r.json();

  if (feed.error && res) {
    res.statusCode = 404;
  }

  return {
    feed
  };
};
