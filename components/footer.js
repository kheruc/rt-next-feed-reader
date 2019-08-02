const Footer = () => {
  return (
    <footer>
      <div className="copyright">© {new Date().getFullYear()} Feed Reader.</div>
      <div className="info">
        <a href="https://clearbit.com">Logos provided by Clearbit</a>
      </div>
      <style jsx>{`
        footer {
          text-align: center;
          margin: 120px 0;
        }
        .info {
          font-size: 14px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
