import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="GPT Rewriter" key="title" />
        <meta
          property="og:description"
          content="Rewrite your text as you like"
          key="description"
        />
        <meta property="og:image" content="src/gptrewriter_og.png" />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
