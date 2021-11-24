import Head from 'next/head';
import React from 'react';

export const getStaticProps = async (
  context
) => {
  return {
    revalidate: 3600,
    props: {
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

export default function WithoutRewritePage({
  slug,
}) {
  return (
    <div>
      <Head>
        <title>Without Rewrite</title>
      </Head>

      <main>
        <h1>Without Rewrite</h1>
        <div>{slug}</div>
      </main>
    </div>
  );
}

