function MyApp({ Component, pageProps }) {
  return (
    <>
      <script
        crossOrigin="true"
        src="https://unpkg.com/react@16/umd/react.development.js"
      ></script>
      <script
        crossOrigin="true"
        src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
      ></script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
