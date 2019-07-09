import Head from 'next/head';

const Page = props => {
  return (
    <div className="page">
      <Head>
        <title>{props.title ? `${props.title} | Next Feed Reader` : 'Next Feed Reader'}</title>
      </Head>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Page;
