import { store } from 'appRedux/store';
import Home from 'pages/home';
import Product from 'pages/product';
import Search from 'pages/search';
import './App.css';
// Third party.
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['"Mulish"', 'sans-serif'].join(','),
  },
});
const responsiveTheme = responsiveFontSizes(theme);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={responsiveTheme}>
        <BrowserRouter>
          <Switch>
            <Route path="/product" component={Product} />
            <Route path="/search" component={Search} />
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
