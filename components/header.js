import Link from 'next/link';

const Header = ({darkMode}) => {
  return (
    <header>
      <div className={`logo ${darkMode ? 'dark' : null}`}>
        <Link href="/">
          <a>Feed Reader</a>
        </Link>
      </div>
      <style jsx>{`
        header {
          text-align: center;
          margin: 20px 10px;
        }
        .logo a {
          text-shadow: rgba(0, 0, 0, 0.13) 3px 3px 5px;
          font-size: 32px;
          font-weight: 900;
          color: #444;
        }
        .dark a {
          color: #fff;
        }
      `}</style>
    </header>
  );
};

export default Header;
