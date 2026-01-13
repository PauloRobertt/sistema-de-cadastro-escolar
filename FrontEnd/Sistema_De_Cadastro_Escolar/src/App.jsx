import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import GlobalStyles from './styles/GlobalStyles';

import Rotas from './Routes';
import store, { persistor } from './store';
import history from './service/history';

function App() {
  return (
    <HistoryRouter history={history}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Rotas />
          <GlobalStyles />
        </PersistGate>
      </Provider>
    </HistoryRouter>
  );
}

export default App;
