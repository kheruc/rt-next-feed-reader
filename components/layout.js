import Header from './header';
import Footer from './footer';
import {useState} from 'react';
import Switch from 'react-switch';
import ThemeContext from './ThemeContext';

const Layout = props => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  };

  return (
    <div className={`site-wrapper ${isChecked ? 'dark' : null}`}>
      <div style={{position: 'absolute', top: '5', left: '5'}}>
        <Switch
          checked={isChecked}
          offColor="#282c35"
          onColor="#c9c9c9"
          onHandleColor="#282c35"
          offHandleColor="#f9faff"
          onChange={handleChange}
        />
      </div>
      <Header darkMode={isChecked} />

      <ThemeContext.Provider value={isChecked ? 'dark' : 'light'}>
        <div className="content-wrapper">{props.children}</div>
      </ThemeContext.Provider>

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
          font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI',
            'Fira Sans', Avenir, 'Helvetica Neue', 'Lucida Grande', sans-serif;
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
          background: #f9faff;
        }

        .content-wrapper {
          min-height: 600px;
        }

        .page {
          max-width: 800px;
          margin: 50px auto;
        }

        .dark {
          background-color: #282c35;
          color: #fafafa;
        }
        .dark p {
          color: #ccc;
        }
        .dark h1 {
          color: #bbb;
        }
      `}</style>
    </div>
  );
};
export default Layout;
