import './App.css';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import {Provider} from 'react-redux';
import rootReducer from './Redux/Reducer/index';
import Rutas from './Rutas';



function App() {
  const sagasMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, applyMiddleware(sagasMiddleware))


  return ( 
    <Provider store={store}>
      <Rutas/>
    </Provider>
  );
}

export default App;
