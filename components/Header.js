import Head from "next/head";

export default function Header(props) {
  const { title } = props;
  const description =
    "Criado com o intuito de fornecer um espaço onde os assuntos mais prementes possam ser discutidos de forma mais aberta, honesta e sem pressões.";

  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta key="description" name="description" content={description} />
      <meta
        key="keywords"
        name="keywords"
        content="pandemia, covid, conferência, evento online"
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:url" content="https://istovai.world" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/images/isto-vai--preview.png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="672" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@IstoVai" />
      <meta name="twitter:title" content={title} />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={description}
      />
      <meta name="twitter:image" content="/images/isto-vai--preview.png" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/images/favicon/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/images/favicon/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/images/favicon/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/images/favicon/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/images/favicon/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/images/favicon/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/images/favicon/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/favicon/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/images/favicon/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/images/favicon/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon/favicon-16x16.png"
      />
      <link
        rel="shortcut icon"
        type="image/jpg"
        href="/images/favicon/favicon.ico"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}
