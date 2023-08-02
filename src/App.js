import React, {useState , useEffect, createContext} from 'react';
import './App.css';
import Home from './components/Home/Home';
import Head from './components/Head/Head';
import Shipment from './components/Shipment/Shipment';

export const CategoryContext = createContext();

function App() {
  const  [category , setCategory]=useState('laptop')
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <h3>count value : {category}</h3>
      <Head></Head>
      <Home></Home>
      <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;
