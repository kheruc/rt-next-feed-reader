import {useState, useContext} from 'react';
import Modal from 'react-modal';
import ThemeContext from './ThemeContext';

const PostList = ({posts, slug}) => {
  const [indexOpen, setIndexOpen] = useState(null);

  const themeIsDark = useContext(ThemeContext) === 'dark';
  const postStyle = `
    <style>
      pre {
        padding: 30px;
        background: inherit;
        opacity: 0.5;
        max-width: 800px;
        font-size: 13px;
        overflow: auto;
      }
      li {
        overflow: auto; 
      }
    </style>
  `;

  return (
    <div className="posts">
      {posts.map((post, i) => {
        return (
          <div className="post" key={i}>
            <h2>{post.title}</h2>
            <div className="info">
              {post.author ? (
                <span>
                  <strong>{post.author}</strong> |{' '}
                </span>
              ) : null}
              <span>{post.published}</span>
            </div>
            <div className="preview">
              <p>{post.preview}</p>
              <a href={post.link} target="_blank">
                <button>visit post</button>
              </a>
              <button onClick={() => setIndexOpen(i)}>read here</button>
              {
                // <div style={{display: i === indexOpen ? 'block' : 'none'}}>
                //   <button onClick={() => setIndexOpen(null)}>Close</button>
                //   <div dangerouslySetInnerHTML={{__html: post.content}} />
                // </div>
              }
              <Modal
                isOpen={i === indexOpen}
                contentLabel={post.title}
                style={{
                  overlay: {
                    background: themeIsDark
                      ? 'rgba(0, 0, 0, 0.7)'
                      : 'rgba(255, 255, 255, 0.7)',
                  },
                  content: {
                    background: themeIsDark ? '#282c35' : '#fafafa',
                    color: themeIsDark ? '#bbb' : '#222',
                  },
                }}>
                <button
                  style={{
                    position: 'fixed',
                    padding: '5px',
                    top: '10px',
                    left: '10px',
                    background: 'black',
                    border: 'none',
                    fontSize: '25px',
                    color: 'white',
                  }}
                  onClick={() => setIndexOpen(null)}>
                  Close
                </button>
                <div
                  dangerouslySetInnerHTML={{__html: post.content + postStyle}}
                />
              </Modal>
            </div>
          </div>
        );
      })}

      <style jsx>{`
        .post {
          margin-bottom: 60px;
        }
        h2 {
          margin: 50px 0 20px;
          font-size: 28px;
          line-height: 1.3;
        }
        .info {
          font-size: 16px;
          margin-bottom: 10px;
        }
        button {
          background: forestgreen;
          border: none;
          margin: 15px;
          font-size: 16px;
          border-radius: 5px;
          color: white;
          padding: 8px 10px;
          cursor: pointer;
        }
        a button {
          background: orangered;
        }
      `}</style>
    </div>
  );
};

export default PostList;
