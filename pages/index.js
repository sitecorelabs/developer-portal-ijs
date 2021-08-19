import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getMarkdownData } from "../lib/getMarkdownData";
import ReactMarkdown from "react-markdown";

export async function getStaticProps() {
  const communityMarkDownFolder = "communityMarkdown";
  const slack = await getMarkdownData("slack.md", communityMarkDownFolder);
  const stackexchange = await getMarkdownData("stackexchange.md", communityMarkDownFolder);
  const forums = await getMarkdownData("forums.md", communityMarkDownFolder);

  return {
      props: {
          forums,
          slack,
          stackexchange,
      },
  };
}

export default function Home({forums, slack, stackexchange}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dev Portal Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          🚧 Welcome to Dev Portal Demo 🚧
        </h1>

        <div className={styles.grid}>
          <div className={styles.youtubeCard}>
            <h2>I'm recent YouTube videos 🎥</h2>
          </div>
          <div className={styles.youtubeCard}>
            <h2>Join these cool Sitecore Communities 🤖</h2>
            <div className={styles.threeColumn}>
              <div className={styles.oneThirdCard}>
                <ReactMarkdown>{slack.markdown}</ReactMarkdown>
              </div>
              <div className={styles.oneThirdCard}>
                <ReactMarkdown>{stackexchange.markdown}</ReactMarkdown>
              </div>
              <div className={styles.oneThirdCard}>
                <ReactMarkdown>{forums.markdown}</ReactMarkdown>
              </div>
            </div>
          </div>
          <div className={styles.youtubeCard}>
            <h2>Upcoming Events</h2>
          </div>

          {/* PRODUCT SOLUTIONS */}
          <div className={styles.productCategoryCard}>
            <a href="content-management/" ><h2>Content Management (CMS) 💾 &rarr;</h2></a>
            <p>Integrate CMS into your tech stack to enable marketing teams to own the digital solutions.</p>
            <a href="content-management/" className={styles.link}>Learn more...</a>
          </div>
          <div className={styles.productCategoryCard}>
            <a href="digital-asset-management/" ><h2>Digital Asset Management (DAM) 📀 &rarr;</h2></a>
            <p>Scale management and delivery of media and static assets</p>
            <a href="digital-asset-management/" className={styles.link}>Learn more...</a>
          </div>
          <div className={styles.productCategoryCard}>
            <a href="customer-data-management/" ><h2>Customer Data Management 👨‍👨‍👧‍👧 &rarr;</h2></a>
            <p>Track events, activity, and customer profile information</p>
            <a href="customer-data-management/" className={styles.link}>Learn more...</a>
          </div>
          <div className={styles.productCategoryCard}>
            <a href="personalization-testing/" ><h2>Personalization and Testing 🕵️‍♀️ &rarr;</h2></a>
            <p>Deliver personalized content and test which content is working</p>
            <a href="personalization-testing/" className={styles.link}>Learn more...</a>
          </div>
          <div className={styles.productCategoryCard}>
            <a href="marketing-automation/" ><h2>Marketing Automation 🚗 &rarr;</h2></a>
            <p>Connect with customers using marketing automation</p>
            <a href="marketing-automation/" className={styles.link}>Learn more...</a>
          </div>
          <div className={styles.productCategoryCard}>
            <h2><a href="commerce/">Commerce 💸 &rarr;</a></h2>
            <p>Build out order management, merchandising, marketplaces, and storefronts</p>
            <a href="commerce/" className={styles.link}>Learn more...</a>
          </div>
          <div className={styles.youtubeCard}>
            <h2>Help and Feedback</h2>
          </div>
        </div>
      </main>
    </div>
  )
}
