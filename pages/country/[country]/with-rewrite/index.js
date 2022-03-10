import Head from 'next/head';
import Link from 'next/link'
import React from 'react';

export default function WithRewriteDirectoryPage() {
  return (
    <div>
      <Head>
        <title>With Rewrite Directory</title>
      </Head>

      <main>
        <h1>With Rewrite Directory</h1>
        <ul>
          <li><Link href="/with-rewrite/faz">With Rewrite faz</Link></li>
          <li><Link href="/with-rewrite/baz">With Rewrite baz</Link></li>
        </ul>
      </main>
    </div>
  );
}
