import React from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

import Home from './pages/Home/Home';



function App() {



  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>


  );
}

export default App;