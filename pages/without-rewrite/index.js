import Head from 'next/head';
import Link from 'next/link'
import React from 'react';

export default function WithoutRewriteDirectoryPage() {
  return (
    <div>
      <Head>
        <title>Without Rewrite Directory</title>
      </Head>

      <main>
        <h1>Without Rewrite Directory</h1>
        <ul>
          <li><Link href="/without-rewrite/foo">Without Rewrite foo</Link></li>
          <li><Link href="/without-rewrite/bar">Without Rewrite bar</Link></li>
        </ul>
      </main>
    </div>
  );
}
