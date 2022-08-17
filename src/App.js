import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Greeting from "./components/Greeting"

function App() {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;