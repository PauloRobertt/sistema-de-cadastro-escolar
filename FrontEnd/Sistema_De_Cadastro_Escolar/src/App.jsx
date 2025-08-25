import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import GlobalStyles from './styles/GlobalStyles';

import Rotas from './Routes';
import store, { persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Rotas />
        <GlobalStyles />
      </PersistGate>
    </Provider>
  );
}

export default App;
