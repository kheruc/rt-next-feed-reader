import Head from 'next/head';

const Page = props => {
  return (
    <div className="page">
      <Head>
        <title>
          {props.title ? `${props.title} | Feed Reader` : 'Feed Reader'}
        </title>
      </Head>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Page;
