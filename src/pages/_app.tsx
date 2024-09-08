import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import '../assets/scss/app.scss'
import Layout from './layout';
import {Provider} from 'react-redux'
import {store} from "@/store/mainReducer";

function MyApp(props: any) {
  const {Component, pageProps} = props;

  const theme = createTheme({
    direction: 'ltr',
});

  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Layout>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
