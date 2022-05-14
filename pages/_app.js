import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "utility/createEmotionCache";
import "@styles/globals.css";
import theme from "@styles/theme";
import Head from "next/head";
import PropTypes from "prop-types";
import { StoreProvider } from "@lib/zustandProvider";
import { useHydrate } from "@lib/store";

const Noop = ({ children }) => <>{children}</>;
// Client-side cache shared for the whole session
// of the user in the browser.

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  const store = useHydrate(pageProps.initialZustandState);

  const Layout = Component.Layout ?? Noop;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <title>Talio - Labor hub for matching talents</title>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, 
                consistent, and simple baseline to
                build upon. */}

        <CssBaseline />
        <Layout>
          <StoreProvider store={store}>
            <Component {...pageProps} />
          </StoreProvider>
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
