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

export default function UnrestrictedPage({
  slug,
}) {
  return (
    <div>
      <Head>
        <title>Unrestricted</title>
      </Head>

      <main>
        <h1>Unrestricted</h1>
        <div>{slug}</div>
      </main>
    </div>
  );
}

