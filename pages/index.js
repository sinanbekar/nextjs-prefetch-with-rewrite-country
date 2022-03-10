import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Home() {
  const [currentCountry, setCurrentCountry] = React.useState(null);

  React.useEffect(() => {
    const cookieValue = document.cookie
      .split("; ")
      ?.find((row) => row.startsWith("country="))
      ?.split("=")[1];

    setCurrentCountry(cookieValue);
  }, []);

  const clearCookie = (event) => {
    document.cookie =
      "country=; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure";
    setCurrentCountry(null);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <div style={{ margin: "1rem" }}>
          <div style={{ marginTop: "1rem" }}>
            <p>Current Country: {currentCountry ?? "null"}</p>
            <button onClick={clearCookie}>Clear Country Cookie</button>
            <br />
            <small style={{ fontSize: "12px" }}>
              &quot;With Rewrite&quot; pages willshow US defaultly the
              country cookie does not exist.
            </small>
          </div>
        </div>
        <ul>
          <li>
            <Link href="/without-rewrite">Without Rewrite</Link>
          </li>
          <li>
            <Link href="/with-rewrite">With Rewrite</Link>
          </li>
          <li>
            <Link href="/with-rewrite/qux">With Rewrite qux (after reset cookie)</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
