import { StyledThemeProvider } from 'definitions/styled-components';
import { Home } from 'pages/HomePage';
import { Provider } from 'react-redux';
import store from 'redux/store';

function App(): JSX.Element {
  return (
    <StyledThemeProvider>
      <Provider store={store}>
        <div className="App">
          <Home />
        </div>
      </Provider>
    </StyledThemeProvider>
  );
}

export default App;
