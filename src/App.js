import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from './redux/store';
import { configureStore } from '@reduxjs/toolkit';
// import About from './screens/About';
import Register from './screens/Register';
//import Register2 from './screens/Register2';
//import Userlist from './screens/Userlist';
import Contact from './screens/Contact';

const store = configureStore([
  reducer: rootReducer,
  ]);

const router = createBrowserRouter([
  {
    path : "/contact",
    element : <div><Contact/></div>
  },
  {
    path : "/about",
    element : <div>About Us??</div>
  },
  {
    path : "/register",
    element : <div><h1><Register/></h1> </div>
  }
])

function App() {

  return (
    <div className="App">
      {/* <h1><Register2/></h1> */}
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
      </div>  
  );
}

export default App;