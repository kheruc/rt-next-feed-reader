import Page from '../components/Page';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    const statusCode = this.props.statusCode || 500;

    return (
      <Page title={`${statusCode} Error`}>
        <h1 className="page-heading">{statusCode} Error</h1>

        {statusCode == 404
          ? `Sorry, we can’t find what you’re looking for...`
          : 'An error occurred, please try again later.'}
      </Page>
    );
  }
}

export default Error;
