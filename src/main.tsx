import React from 'react'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import  {store, persistor } from './app/store';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Import Slick CSS files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
           <App />
        </PersistGate>
      </Provider>
  </React.StrictMode>,
)
