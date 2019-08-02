import fetch from 'isomorphic-unfetch';
import Error from '../_error';
import Page from '../../components/page';
import PostList from '../../components/post-list';
import feeds from '../../data/feeds';
import {distanceInWordsToNow} from 'date-fns';
import striptags from 'striptags';

export default function Feed({feed}) {
  if (feed.error) {
    return <Error statusCode={404} />;
  }

  return (
    <Page title={feed.title}>
      <div className="feed">
        {/* <img className="image" src={`/static/images/${feed.slug}.png`} /> */}
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

      {feed.posts.length ? (
        <PostList posts={feed.posts} slug={feed.slug} />
      ) : (
        <div>Posts are not available at the moment</div>
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
    </Page>
  );
}

Feed.getInitialProps = async ({res, query}) => {
  // let r = await fetch(`/api/feeds/${query.slug}`);
  // let feed = await r.json();
  let feed;

  const filtered = feeds.filter(item => item.slug === query.slug);

  if (filtered.length > 0) {
    feed = filtered[0];
    feed.posts = [];

    let r = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${feed.url}`,
    );
    let data = await r.json();

    if (data && data.items) {
      data.items.map(post => {
        feed.posts.push({
          title: post.title,
          published: distanceInWordsToNow(post.pubDate) + ' ago',
          link: post.link,
          author: striptags(post.author),
          preview: striptags(post.description).slice(0, 300),
          content: post.content,
        });
      });
    }
    // if (feed.error && res) {
    //   res.statusCode = 404;
    // }
  } else {
    feed = {error: 'Feed not found.'};
  }
  return {
    feed,
  };
};
