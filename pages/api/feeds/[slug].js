import fetch from 'isomorphic-unfetch';
import feeds from '../../../data/feeds';
import {distanceInWordsToNow} from 'date-fns';
import striptags from 'striptags';

export default async (req, res) => {
  const filtered = feeds.filter(item => item.slug === req.query.slug);

  if (filtered.length > 0) {
    let feed = filtered[0];
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

    res.status(200).json(feed);
  } else {
    res.status(404).json({error: 'Feed not found.'});
  }
};
