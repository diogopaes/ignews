import { GetServerSideProps } from 'next';

import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

import styles from '../styles/home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
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
            <span>for {product.amount} month</span>
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

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1IyMvMHfX9cjwsPxNoADL5Vo', {
    expand: ['product']
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }

  return{
    props: {
      product
    }
  }
}
