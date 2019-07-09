const Footer = () => {
  return (
    <footer>
      <div className="copyright">© {new Date().getFullYear()} Next Feed Reader.</div>
      <div className="info">
        <p>
          Note: This is a demo website.{' '}
          <a href="https://reacttricks.com/exploring-next-9-dynamic-routing-and-api-routes">Learn how to build it.</a>
        </p>
      </div>
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
