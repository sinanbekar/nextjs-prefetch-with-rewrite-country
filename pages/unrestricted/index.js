import Head from 'next/head';
import Link from 'next/link'
import React from 'react';

export default function UnrestrictedDirectoryPage() {
  return (
    <div>
      <Head>
        <title>Unrestricted Directory</title>
      </Head>

      <main>
        <h1>Unrestricted Directory</h1>
        <ul>
          <li><Link href="/unrestricted/foo">Unrestricted foo</Link></li>
          <li><Link href="/unrestricted/bar">Unrestricted bar</Link></li>
        </ul>
      </main>
    </div>
  );
}
