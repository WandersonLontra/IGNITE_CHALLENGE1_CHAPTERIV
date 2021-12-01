import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../../styles/theme';
import Header from '../components/Header';

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/css/bundle";

import "../../styles/slider.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
