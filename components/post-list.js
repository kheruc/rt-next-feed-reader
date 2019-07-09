const PostList = ({ posts }) => {
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
              <time>{post.published}</time>
            </div>
            <div className="preview">
              {post.preview}
              {'... '}
              <a href={post.link} target="_blank">
                read more
              </a>
            </div>
          </div>
        );
      })}

      <style jsx>{`
        .post {
          margin-bottom: 60px;
        }
        h2 {
          color: #333;
          margin: 50px 0 20px;
          font-size: 28px;
          line-height: 1.3;
        }
        .info {
          color: #555;
          font-size: 16px;
          margin-bottom: 10px;
        }
        time {
          color: #777;
        }
        .preview {
          color: #7a7a7a;
        }
      `}</style>
    </div>
  );
};

export default PostList;
