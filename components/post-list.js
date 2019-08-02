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
        max-width: 800px;
        font-size: 14px;
        overflow: auto;
        background-color: #011627;
        border-radius: 10px;
        color: #fff;
        margin: 20px auto;
      }
      img {
        text-align: center;
        max-width: 250px;
      }
      li {
        overflow: auto; 
      }
      figure > * {
        max-height: 320px;
      }
      
      ::-webkit-scrollbar {
        width: 4px;
      }

      ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 3px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #555;
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
              <a href={post.link} title="Visit" target="_blank">
                <button>🔗</button>
              </a>
              <button title="Read" onClick={() => setIndexOpen(i)}>
                📄
              </button>
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
                    width: '100%',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    bottom: '0',
                  },
                }}>
                <button
                  style={{
                    position: 'fixed',
                    padding: '5px 10px',
                    top: '3px',
                    left: '3px',
                    fontSize: '20px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    color: '#eee',
                  }}
                  onClick={() => setIndexOpen(null)}>
                  Close
                </button>
                <a
                  href={post.link}
                  style={{
                    position: 'fixed',
                    top: '5px',
                    right: '5px',
                    border: 'none',
                    fontSize: '15px',
                  }}>
                  <button>🔗</button>
                </a>
                <h2>{post.title}</h2>
                <div
                  className="post-container"
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
        .post-container {
          padding: 10px;
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
          border: 2px dotted gray;
          background: transparent;
          margin: 15px;
          font-size: 18px;
          color: inherit;
          border-radius: 5px;
          padding: 8px 10px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};
export default PostList;
