import Head from 'next/head';
import {useEffect} from 'react';

const Page = props => {
  useEffect(() => {
    console.log(document.cookie)
  },[])

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
