import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link href="/">
          <a>Next Feed Reader</a>
        </Link>
      </div>
      <style jsx>{`
        header {
          text-align: center;
          margin: 40px 0;
        }
        .logo a {
          text-shadow: rgba(0, 0, 0, 0.13) 3px 3px 5px;
          font-size: 32px;
          font-weight: 900;
          color: #111;
        }
      `}</style>
    </header>
  );
};

export default Header;
