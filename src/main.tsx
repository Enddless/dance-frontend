import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App.tsx';
import { persistor, store } from './store/index.ts';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { getCurrentUserData, getCurrentUserRole } from './store/thunk/auth.ts';
import { BrowserRouter } from 'react-router-dom';
// import './styles/styles.scss';
import './main.module.scss';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

store.dispatch(getCurrentUserData());
store.dispatch(getCurrentUserRole());

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchOnWindowFocus: false // отключение повторных запросов в случае переключения и возврата на вкладку
    },
    mutations: {}
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading</div>} persistor={persistor}>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
