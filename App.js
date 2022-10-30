import useCachedResources from './hooks/useCachedResources';
// import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import React from "react";

import { Provider } from 'react-redux';
import { Store } from './redux/store';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={Store}>
        <Navigation />
      </Provider>
    );
  }
}