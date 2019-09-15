import Header from './header';
import Footer from './footer';
import {useState, useEffect} from 'react';
import Router from 'next/router';
import Switch from 'react-switch';
import ThemeContext from './ThemeContext';

const Layout = props => {
  const [isChecked, setIsChecked] = useState(false);
  const [loggedIn, setLoggedIn] = useState({})

  const handleChange = () => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  };

  useEffect(() => {
    fetch('/api/getUser')
      .then(res => res.json())
      .then(data => {
        console.log('recieved from api/getUser', data); 
        setLoggedIn({...loggedIn, id: data.token})
        if(data.user) {
          setLoggedIn({...loggedIn, user: {...data.user}})
        }
    }); 
  },[])

  return (
    <div className={`site-wrapper ${isChecked ? 'dark' : null}`}>
      <div className="navbar">
        <Switch
          checked={isChecked}
          offColor="#282c35"
          onColor="#c9c9c9"
          onHandleColor="#282c35"
          offHandleColor="#f9faff"
          onChange={handleChange}
        />
        <div className="navbar-controls">
          {loggedIn.user
              ? (<><span style={{margin: '0 10px'}}>{loggedIn.user.name}</span><button onClick={() => {document.cookie='token=;'; location.reload()}}>Sign Out</button></>)
              : (<><button style={{margin: '0 10px'}} onClick={() => Router.push('/login')}>Sign In</button><button onClick={() => Router.push('/register')}>Sign Up</button></>)
          } 
         </div>
      </div>
      <div style={{marginTop: '50px'}}>
      <Header darkMode={isChecked} />
      </div>
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

        /* .content-wrapper {
        //   min-height: 600px;
        */ }

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
        .navbar {
          position: absolute; 
          top: 5; 
          left: 5; 
          width: 95%; 
          display: flex; 
          justify-content: space-around;      
        }
        button {
          padding: 7px 10px;
          background: #ddd;
          opacity: 0.7;
          color: #111;
          font-size: 15px;
          border: none;
          cursor: pointer;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};
export default Layout;
