import Header from './header';
import Footer from './footer';

const Layout = props => {
  return (
    <div className="site-wrapper">
      <Header />

      <div className="content-wrapper">{props.children}</div>

      <Footer />

      <style jsx global>{`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-size: 18px;
          line-height: 1.7;
          font-weight: 400;
          background: #fafafa;
          color: #454545;
          font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', 'Fira Sans', Avenir, 'Helvetica Neue',
            'Lucida Grande', sans-serif;
          text-rendering: optimizeLegibility;
        }

        a {
          color: #1b789e;
          text-decoration: none;
        }

        a:hover {
          color: #166281;
        }

        h1,
        h2,
        h3 {
          margin: 40px 0 30px;
        }

        h1 {
          font-size: 42px;
        }

        h2 {
          font-size: 36px;
        }

        p {
          margin: 0 0 10px;
        }

        img {
          max-width: 100%;
        }

        .site-wrapper {
          padding: 20px;
        }

        .content-wrapper {
          min-height: 600px;
        }

        .page {
          max-width: 800px;
          margin: 100px auto;
        }
      `}</style>
    </div>
  );
};

export default Layout;
