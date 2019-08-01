const Footer = () => {
  return (
    <footer>
      <div className="copyright">© {new Date().getFullYear()} Feed Reader.</div>
      <style jsx>{`
        footer {
          text-align: center;
          margin: 120px 0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
