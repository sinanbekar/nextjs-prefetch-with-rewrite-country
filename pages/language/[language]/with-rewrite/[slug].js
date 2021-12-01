import Head from 'next/head';
import React from 'react';

export const getStaticProps = async (
  context
) => {
  if (typeof context.params?.language !== 'string') {
    throw new Error('Missing language');
  }

  return {
    revalidate: 3600,
    props: {
      language: context.params.language,
      slug: context.params.slug,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
};

export default function WithRewritePage({
  language,
  slug,
}) {
  return (
    <div>
      <Head>
        <title>With Rewrite</title>
      </Head>

      <main>
        <h1>With Rewrite</h1>
        <div>{language}</div>
        <div>{slug}</div>
      </main>
    </div>
  );
}

