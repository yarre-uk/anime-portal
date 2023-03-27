import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { persistor, store } from './store';

import { i18n } from '@/modules/Translation';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <I18nextProvider i18n={i18n}>
        {/* //TODO WRITE LOADER */}
        <Suspense fallback="loading...">
          <App />
        </Suspense>
      </I18nextProvider>
    </PersistGate>
  </Provider>,
);
