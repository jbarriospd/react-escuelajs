import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import Search from '../componentes/Search';
import Categories from '../componentes/Categories';
import Carousel from '../componentes/Carousel';
import CarouselItem from '../componentes/CarouselItem';

const Home = ({ myList:[], trends:[], originals:[] }) => {

  // initialState.mylist.length > 0 ? <h1>Loading...</h1> : 
  return (
    <>
      <Search />
      {myList.length > 0 &&
        <Categories title="Mi lista">
          <Carousel>
            {myList.map(item =>
              <CarouselItem key={item.id} {...item} />)}
            )}
          </Carousel>
        </Categories>
      }
      <Categories title="Tendencias">
        <Carousel>
          {trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originale de platzi">
        <Carousel>
          {originals.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

    </>
  );
};

const mapStateToProps = state => {
  return {
    mylist: state.myList,
    trends: state.trends,
    originals: state.originals
  }
}
export default connect(mapStateToProps, null)(Home);