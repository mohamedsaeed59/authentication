import '../styles/styles.css';

function MyApp(props: any) {
  const {Component, pageProps} = props;

  return <Component {...pageProps} />;

}

export default MyApp;
