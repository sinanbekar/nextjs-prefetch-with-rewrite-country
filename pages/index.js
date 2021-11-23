import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <ul>
          <li><Link href="/unrestricted">Unrestricted</Link></li>
          <li><Link href="/restricted">Restricted</Link></li>
        </ul>
      </main>
    </div>
  )
}
