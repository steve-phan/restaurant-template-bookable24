import React from 'react';
import { Provider } from 'react-redux';

import { store } from './src/store/store';
import { CheckAuth } from './src/firebase/CheckAuth';

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <CheckAuth />
      {element}
    </Provider>
  );
};
