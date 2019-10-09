import React, { useState, useEffect } from 'react';

import Header from '../componentes/Header';
import Search from '../componentes/Search';
import Categories from '../componentes/Categories';
import Carousel from '../componentes/Carousel';
import CarouselItem from '../componentes/CarouselItem';
import Footer from '../componentes/Footer';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const App = () => {
  const initialState = useInitialState(API);

  return (
    <div className="App">
      <Header />
      <Search />
      {initialState.mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originale de platzi">
        <Carousel>
          {initialState.originals.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};
export default App;
