import Head from 'next/head';
import { AppProps } from 'next/app';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import '../styles/index.css';
import { HOME_OG_IMAGE_URL, TITLE } from '../lib/constants';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no, viewport-fit=cover"
        />
        <title>{TITLE}</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@iyagiclub" />
        <meta name="twitter:title" content="이야기 클럽" />
        <meta name="twitter:description" content="이야기가 펼쳐지는 곳, 이야기 클럽" />
        <meta name="twitter:image" content={HOME_OG_IMAGE_URL} />
        <meta property="twitter:url" content="https://www.iyagi.club" />

        <script src="https://developers.kakao.com/sdk/js/kakao.js" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
