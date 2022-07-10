import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { themeConfig } from '../core/theme';
import Head from 'next/head';
import { Container } from '../components/atomic/container';
import { FlexBox } from '../components/atomic/flex-box';
import BottomNavigator from '../components/pages/bottom-navigator';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themeConfig}>
      <Head>
        <title key='local'>@dimasbaguspm - personal site</title>
      </Head>
      <Container>
        <FlexBox justifyCenter alignCenter flexColumn>
          <Component {...pageProps} />
          <BottomNavigator />
        </FlexBox>
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
