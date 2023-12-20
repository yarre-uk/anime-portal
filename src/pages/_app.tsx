import type { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';

import GlobalStyles from '../styles/globals';

import { wrapper } from '@/store';

const App = ({ Component, ...restProps }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(restProps);

  return (
    <Provider store={store}>
      <Head>
        <title>Our Cool Anime Portal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalStyles />

      <Component {...props.pageProps} />
    </Provider>
  );
};

export default appWithTranslation(App);
