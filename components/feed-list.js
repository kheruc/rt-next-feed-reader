import Link from 'next/link';
// import Router from 'next/router';

const FeedList = ({feeds}) => {
  return (
    <div className="feeds">
      {feeds.map(feed => {
        return (
          <div className="feed" key={feed.slug}>
            <Link href="/feed/[slug]" as={`/feed/${feed.slug}`}>
              <a>
                {/* <img src={`/static/images/${feed.slug}.png`} /> */}
                <img
                  src={`//logo.clearbit.com/${feed.website.split('/')[2]}`}
                />
                <b>
                  <div>{feed.title}</div>
                </b>
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
          margin: 0 auto;
          text-align: center;
        }
        .feed {
          padding: 20px;
          width: 33%;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          border: 3px solid;
          border-radius: 4px;
          border-color: transparent;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        .feed:hover {
          border-color: inherit;
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
