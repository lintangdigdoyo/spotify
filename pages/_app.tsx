import type { AppProps } from "next/app";

import Layout from "components/Layout";

import "styles/globals.css";
import Styles from "styles/Styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Styles />
      <Component {...pageProps} />
    </Layout>
  );
}
