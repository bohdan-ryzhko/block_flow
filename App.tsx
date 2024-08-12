import React from 'react';

import { Provider } from 'react-redux';
import { store } from './src/redux';
import { Navigation } from './src/components';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
