import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { displayNotification, requestPermission } from '../lib/notifications';
import Script from 'next/script';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  console.log("ENVARS");
  console.log(process.env);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <Script
          src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          async=""
        ></Script>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello! I like strawberries.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <button onClick={requestPermission}>Request Permission</button>
        <button onClick={displayNotification}>Notify!!</button>
      </section>

    </Layout>
  );
}
