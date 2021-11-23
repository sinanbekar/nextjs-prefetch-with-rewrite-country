import Head from 'next/head';
import Link from 'next/link'
import React from 'react';

export default function RestrictedDirectoryPage() {
  return (
    <div>
      <Head>
        <title>Restricted Directory</title>
      </Head>

      <main>
        <h1>Restricted Directory</h1>
        <ul>
          <li><Link href="/restricted/foo">Restricted faz</Link></li>
          <li><Link href="/restricted/bar">Restricted baz</Link></li>
        </ul>
      </main>
    </div>
  );
}
