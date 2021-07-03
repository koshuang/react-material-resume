import { StyledThemeProvider } from 'definitions/styled-components';
import { Home } from 'pages/HomePage';
import { Provider } from 'react-redux';
import store from 'redux/store';

function App(): JSX.Element {
  return (
    <StyledThemeProvider>
      <Provider store={store}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <div className="App">
          <Home />
        </div>
      </Provider>
    </StyledThemeProvider>
  );
}

export default App;
