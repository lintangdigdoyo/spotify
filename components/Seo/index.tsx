import Head from "next/head";
import { useRouter } from "next/router";

import { defaultMeta, favicons } from "./default";

interface SeoProps extends Partial<typeof defaultMeta> {
  title?: string;
}

const Seo = (props: SeoProps) => {
  const router = useRouter();

  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta.title = props.title ? `${props.title} | ${meta.siteName}` : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta name="description" content={meta.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      {/* open graph */}
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      {/* twitter */}
      <meta name="twitter:card" content={meta.twitter.cardType} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {/* favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name="msapplication-TileColor" content={meta.themeColor} />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content={meta.themeColor} />
    </Head>
  );
};

export default Seo;
