import React, { useState, useEffect } from 'react';

import Header from '../componentes/Header';
import Search from '../componentes/Search';
import Categories from '../componentes/Categories';
import Carousel from '../componentes/Carousel';
import CarouselItem from '../componentes/CarouselItem';
import Footer from '../componentes/Footer';

import '../assets/styles/App.scss';

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/initialState')
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <Search />
      {videos.mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {videos.trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originale de platzi">
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};
export default App;
