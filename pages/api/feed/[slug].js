import fetch from 'isomorphic-unfetch';
// import feeds from '../../../data/feeds';
import {distanceInWordsToNow} from 'date-fns';
import striptags from 'striptags';

function decodeURI(url) {
  return url.replace(/_/g, '/');
}

export default async function(req, res) {
  let url = `https://api.rss2json.com/v1/api.json?rss_url=${decodeURI(
    req.query.slug,
  )}`;

  console.log(url);

  let response = await fetch(url);
  // let data = r.json();
  // await console.log(data);
  if (response.ok) {
    const data = await response.json();
    let posts = [];
    if (data && data.items) {
      data.items.map(post => {
        posts.push({
          title: post.title,
          published: distanceInWordsToNow(post.pubDate) + ' ago',
          link: post.link,
          author: striptags(post.author),
          preview: striptags(post.description).slice(0, 300),
          content: post.content,
        });
      });
    }
    res.status(200).json(posts);
  } else {
    res.status(400).json({error: 'Posts not found.'});
  }

  /* ---------------------------------------------------------*/
}
