import Link from "next/link";
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Component {...pageProps} />
      <footer>Aditya was here</footer>
    </>
  );
};
export default MyApp;
