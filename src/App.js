import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import themeReducer from './Components/reducer';
import ThemeSwitcher from './Components/ThemeSwitcher';
import ThemeStyles from './Components/bodychange';
import './styles.css';
import FormComponent from './Components/form';

const store = createStore(themeReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FormComponent />
        <ThemeSwitcher />
        <ThemeStyles />
      </div>
    </Provider>
  );
}

export default App;

