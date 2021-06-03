import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';

import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to ig.news</title>
      </Head>

      <main className={styles.mainContainer}>
        <section>
          <h3>👏 Hey, welcome</h3>
          <h1>
            News about<br/> the 
            <span> React</span> world
          </h1>

          <p>
            Get acess to all the publications<br/>
            <span>for $9,90 month</span>
          </p>

          <SubscribeButton/>
        </section>

        <div>
          <img src="./images/avatar.svg" alt="Gift Coding | ig.news" />
        </div>
      </main>
    </>
  )
}
