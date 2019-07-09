import Link from 'next/link';

const FeedList = ({ feeds }) => {
  return (
    <div className="feeds">
      {feeds.map(feed => {
        return (
          <div className="feed" key={feed.slug}>
            <Link href="/feed/[slug]" as={`/feed/${feed.slug}`}>
              <a>
                <img src={`/static/images/${feed.slug}.png`} />
                <div>{feed.title}</div>
              </a>
            </Link>
          </div>
        );
      })}

      <style jsx>{`
        .feeds {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-bottom: 50px;
          max-width: 1240px;
          margin: 0 auto;
          text-align: center;
        }
        .feed {
          padding: 20px;
          margin-bottom: 20px;
          width: 33%;
        }

        .feed img {
          width: 120px;
        }
        .feed a {
          display: block;
          line-height: 1.5;
        }
        @media (max-width: 600px) {
          .feed {
            width: 50%;
          }
        }
        @media (max-width: 360px) {
          .feed {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default FeedList;
